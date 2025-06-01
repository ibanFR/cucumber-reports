import Faqs from '@/markdown/faqs.mdx'

export default async function Page() {
  return <main className="flex-grow w-full p-8">
    <article className="prose prose-slate mx-auto">
      <Faqs />
    </article>
  </main>
}