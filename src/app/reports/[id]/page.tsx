import { envelopesStore } from '@/store'
import { Report } from '@/components/Report'
import { ClientWrapper } from '@/components/ClientWrapper'

export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { getUrl } = await envelopesStore.retrieve(id)
  return <ClientWrapper>
    <Report id={id} getUrl={getUrl} />
  </ClientWrapper>
}