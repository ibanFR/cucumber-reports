import { Page } from 'puppeteer'
import { Action, Actor } from '../support/Actor.mjs'

export const retrieveReport: (reportUrl: string) => Action<Page> = (reportUrl) => {
  return async (actor: Actor) => {
    const browser = await actor.world.getOrCreateBrowser()
    const page = await browser.newPage()
    await page.goto(reportUrl)
    return page
  }
}