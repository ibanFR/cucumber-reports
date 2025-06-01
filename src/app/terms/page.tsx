import Terms from '@/markdown/terms.mdx'

export default async function Page() {
  return <main className="flex-grow w-full p-8">
    <article className="prose prose-slate mx-auto">
      <Terms />
    </article>
  </main>
}