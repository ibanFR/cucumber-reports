import assert from 'node:assert'
import { stripVTControlCharacters } from 'node:util'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { Action } from '../support/Actor.mjs'

export const publishReport: () => Action<string> = () => {
  return async () => {
    const getResponse = await fetch('http://localhost:3000/api/reports')
    assert.ok(getResponse.ok)

    const banner = await getResponse.text()
    const reportUrl = stripVTControlCharacters(banner).split(' ').find(part => part.startsWith('http')) as string

    const putUrl = getResponse.headers.get('Location') as string
    const envelopes = readFileSync(path.join(import.meta.dirname, '..', 'fixtures', 'messages-valid.ndjson'), { encoding: 'utf-8' })
    const putResponse = await fetch(putUrl, {
      method: 'PUT',
      body: envelopes,
    })
    assert.ok(putResponse.ok)

    return reportUrl
  }
}