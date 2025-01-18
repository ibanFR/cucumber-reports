import { EmptyObject, EnvelopesStore, RetrievedObject } from './EnvelopesStore'
import { GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { randomUUID } from 'node:crypto'

const S3_BUCKET_NAME = process.env.APP_BUCKET_NAME ?? 'cucumber-reports-anonymous-envelopes'

export class S3EnvelopesStore implements EnvelopesStore {
  private readonly s3 = new S3({
    forcePathStyle: true,
    region: process.env.APP_AWS_REGION,
    endpoint: process.env.APP_AWS_ENDPOINT,
    credentials: {
      accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY as string,
    }
  })

  async touch(): Promise<EmptyObject> {
    const id = randomUUID()

    const rawPutUrl = await getSignedUrl(this.s3, new PutObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: id,
    }), { expiresIn: 3600 })
    const putUrl = new URL(rawPutUrl)

    return {
      id,
      putUrl: putUrl.toString(),
    }
  }

  async retrieve(id: string): Promise<RetrievedObject> {
    const getUrl = await getSignedUrl(this.s3, new GetObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: id,
    }), { expiresIn: 60 })
    return {
      getUrl,
    }
  }
}