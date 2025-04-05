import { Action } from '../support/Actor.mjs'
import { Page } from 'puppeteer'

export const deleteReport: (page: Page) => Action = (page) => {
  return async () => {
    await page.click('button::-p-text(Delete it now)')
  }
}