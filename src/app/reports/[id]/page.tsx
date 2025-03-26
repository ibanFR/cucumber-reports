import { envelopesStore } from '@/store'
import { Report } from '@/components/Report'
import { ClientWrapper } from '@/components/ClientWrapper'

export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { getUrl } = await envelopesStore.retrieve(id)
  return <main className="p-8 mx-auto max-w-7xl">
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold">Your report</h1>
      <p>It will be automatically deleted after 24 hours.</p>
    </header>
    <article>
      <ClientWrapper>
        <Report id={id} getUrl={getUrl} />
      </ClientWrapper>
    </article>
  </main>
}