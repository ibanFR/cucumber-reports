export default async function Page({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { deleted } = await searchParams
  return (
    <>
      {deleted && <div className="w-xs px-4 py-2 mx-auto bg-blue-100">Your report was deleted.</div>}
    </>
  )
}
