import { describe, expect, it } from 'vitest'
import { makeBanner } from './makeBanner'
import { stripVTControlCharacters } from 'node:util'

describe('makeBanner', () => {
  it('returns a banner with the report URL', () => {
    expect(stripVTControlCharacters(makeBanner('https://reports.cucumber.io/report/123'))).toMatchInlineSnapshot(`
      "┌────────────────────────────────────────┐
      │ View your Cucumber Report at:          │
      │ https://reports.cucumber.io/report/123 │
      │                                        │
      │ This report will self-destruct in 24h. │
      └────────────────────────────────────────┘
      "
    `)
  })
})