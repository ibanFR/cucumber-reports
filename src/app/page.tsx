import { FakeWindow } from '@/components/FakeWindow'
import { ClientWrapper } from '@/components/ClientWrapper'
import { Sample } from '@/components/Sample'
import { Ruby } from '@/components/icons/Ruby'
import { Jvm } from '@/components/icons/Jvm'
import { NodeJs } from '@/components/icons/NodeJs'
import { FakeTerminal } from '@/components/FakeTerminal'

export default async function Page({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { deleted } = await searchParams
  return (
    <main className="flex-grow bg-slate-50">
      <div className="max-w-7xl p-8 mx-auto">
        {deleted && <div className="w-xs px-4 py-2 mx-auto bg-blue-100">Your report was deleted.</div>}

        <header className="text-center mb-8">
          <h1 className="text-5xl font-light"><strong className="font-bold">Cucumber</strong> Reports</h1>
          <p className="text-xl">Publish and share your test reports, straight from Cucumber.</p>
        </header>

        <section className="my-8">
          <FakeWindow>
            <ClientWrapper>
              <Sample />
            </ClientWrapper>
          </FakeWindow>
        </section>

        <section className="my-8">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-light">Start publishing <strong className="font-bold">in seconds</strong></h2>
            <p className="text-xl">Support is already built in on our most popular platforms.</p>
          </header>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 flex flex-col justify-between gap-5 p-5 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <div className="max-w-18 mx-auto mb-2">
                  <Ruby />
                </div>
                <h3 className="font-bold text-xl">cucumber-ruby</h3>
                <p className="text-slate-600">Since v6.1.0</p>
              </div>
              <FakeTerminal><span className="text-slate-400">$</span> cucumber --publish</FakeTerminal>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-5 p-5 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <div className="max-w-18 mx-auto mb-2">
                  <Jvm />
                </div>
                <h3 className="font-bold text-xl">cucumber-jvm</h3>
                <p className="text-slate-600">Since v6.10.4</p>
              </div>
              <FakeTerminal title="cucumber.properties">cucumber.publish.enabled=true</FakeTerminal>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-5 p-5 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <div className="max-w-18 mx-auto mb-2">
                  <NodeJs />
                </div>
                <h3 className="font-bold text-xl">cucumber-js</h3>
                <p className="text-slate-600">Since v7.3.0</p>
              </div>
              <FakeTerminal><span className="text-slate-400">$</span> cucumber-js --publish</FakeTerminal>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
