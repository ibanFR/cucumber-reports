import { S3EnvelopesStore } from './S3EnvelopesStore'
import { EnvelopesStore } from './EnvelopesStore'

export const envelopesStore: EnvelopesStore = new S3EnvelopesStore()
