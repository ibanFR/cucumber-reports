import { envelopesStore } from '@/store'
import { makeBanner } from '@/banner'

export async function GET() {
  const { id, putUrl } = await envelopesStore.touch()
  const reportUrl = `${process.env.APP_BASE_URL}/reports/${id}`
  const banner = makeBanner(reportUrl)

  return new Response(banner, {
    status: 202,
    headers: {
      Location: putUrl,
    },
  })
}