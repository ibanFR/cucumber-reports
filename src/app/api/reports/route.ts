import { envelopesStore } from '@/store'
import { makeReportBanner, makeTokenBanner } from '@/banner'

export async function GET(request: Request) {
  if (request.headers.has('Authorization')) {
    return new Response(makeTokenBanner(), {
      status: 400,
    })
  }

  const { id, putUrl } = await envelopesStore.touch()
  const reportUrl = `${process.env.APP_BASE_URL}/reports/${id}`
  return new Response(makeReportBanner(reportUrl), {
    status: 202,
    headers: {
      Location: putUrl,
    },
  })
}