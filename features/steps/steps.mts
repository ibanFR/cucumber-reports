import { Given, Then, When } from '@cucumber/node'
import { publishReport } from '../actions/publishReport.mjs'
import { Actor } from '../support/Actor.mjs'
import { retrieveReport } from '../actions/retrieveReport.mjs'
import assert from 'node:assert'
import crypto from 'node:crypto'
import { canAccessResults } from '../actions/canAccessResults.mjs'
import { PublishResult } from '../actions/types'

Given('{actor} has a private token', async (t, actor: Actor) => {
  actor.remember('privateToken', crypto.randomBytes(16).toString('hex'));
})

When('{actor} publishes a report', async (t, actor: Actor) => {
  const publishResult = await actor.attemptsTo(publishReport(actor.recall('privateToken')))
  actor.remember('publishResult', publishResult)
  t.world.publishResults.push(publishResult)
})

When('{actor} views the report they just published', async (t, actor: Actor) => {
  const page = await actor.attemptsTo(retrieveReport(actor.recall('publishResult')))
  actor.remember('page', page)
})

Then('{actor} should see their test results', async (t, actor: Actor) => {
  assert.ok(await actor.ask(canAccessResults(actor.recall('page'))))
})

Then('{actor} should see the message:', async (t, actor: Actor, expectedBanner: string) => {
  assert.strictEqual(actor.recall<PublishResult>('publishResult').banner.trim(), expectedBanner.trim())
})

Then('no report should be published', async (t) => {
  assert.ok(t.world.publishResults.every((publishResult: PublishResult) => !publishResult.success))
})