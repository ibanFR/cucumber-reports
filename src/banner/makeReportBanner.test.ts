import { describe, expect, it } from 'vitest'
import { makeReportBanner } from './makeReportBanner'
import { stripVTControlCharacters } from 'node:util'

describe('makeReportBanner', () => {
  it('returns a banner with the report URL', () => {
    expect(stripVTControlCharacters(makeReportBanner('https://reports.cucumber.io/report/123'))).toMatchInlineSnapshot(`
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