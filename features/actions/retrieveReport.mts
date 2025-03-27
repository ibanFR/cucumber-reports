import { Page } from 'puppeteer'
import { Action, Actor } from '../support/Actor.mjs'
import { PublishResult } from './types'

export const retrieveReport: (publishResult: PublishResult) => Action<Page> = (publishResult) => {
  return async (actor: Actor) => {
    const browser = await actor.world.getOrCreateBrowser()
    const page = await browser.newPage()
    await page.goto(publishResult.url)
    return page
  }
}