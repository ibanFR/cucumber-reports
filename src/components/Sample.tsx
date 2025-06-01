'use client'

import { useEnvelopes } from '@/hooks/useEnvelopes'
import { FC } from 'react'
import { EnvelopesProvider, InMemorySearchProvider } from '@cucumber/react-components'
import { FilteredResults } from './FilteredResults'

export const Sample: FC = () => {
  const { data: envelopes } = useEnvelopes('sample', '/sample-envelopes.ndjson')
  if (!envelopes) {
    return null
  }
  return (
    <div data-testid="sample">
      <EnvelopesProvider envelopes={envelopes}>
        <InMemorySearchProvider>
          <FilteredResults />
        </InMemorySearchProvider>
      </EnvelopesProvider>
    </div>
  )
}