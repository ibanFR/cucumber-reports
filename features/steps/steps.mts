import { Then, When } from '@cucumber/node'
import { publishReport } from '../actions/publishReport.mjs'
import { Actor } from '../support/Actor.mjs'
import { retrieveReport } from '../actions/retrieveReport.mjs'
import assert from 'node:assert'
import { canAccessResults } from '../actions/canAccessResults.mjs'

When('{actor} publishes a report', async (t, actor: Actor) => {
  const reportUrl = await actor.attemptsTo(publishReport())
  actor.remember('reportUrl', reportUrl)
})

When('{actor} views the report they just published', async (t, actor: Actor) => {
  const reportPage = await actor.attemptsTo(retrieveReport(actor.recall('reportUrl')))
  actor.remember('reportPage', reportPage)
})

Then('{actor} can see their test results', async (t, actor: Actor) => {
  assert.ok(await actor.ask(canAccessResults(actor.recall('reportPage'))))
})