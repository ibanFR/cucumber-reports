import { envelopesStore } from '@/store'
import { Report } from '@/components/Report'
import { ClientWrapper } from '@/components/ClientWrapper'
import { deleteReport } from '@/app/actions'

export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const retrieved  = await envelopesStore.retrieve(id)
  if (!retrieved) {
    return <div className="text-center">
      <h1 className="text-3xl font-bold">No report found</h1>
      <p>It might have expired, or been deleted.</p>
    </div>
  }

  const deleteReportWithId = deleteReport.bind(null, id)
  return <>
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold">Your report</h1>
      <p>It will be automatically deleted after 24 hours. <button onClick={deleteReportWithId} className="bg-red-700 text-white text-sm px-2 py-1 rounded-sm ml-1 cursor-pointer">Delete it now</button></p>
    </header>
    <article>
      <ClientWrapper>
        <Report id={id} getUrl={retrieved.getUrl} />
      </ClientWrapper>
    </article>
  </>
}