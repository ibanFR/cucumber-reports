import { Page } from 'puppeteer'
import { Action } from '../support/Actor.mjs'

export const canAccessResults: (page: Page) => Action<boolean> = (page) => {
  return async () => {
    await page.locator('[data-testid="cucumber-react"]').wait()
    return true
  }
}