'use client'

import { useEnvelopes } from '@/hooks/useEnvelopes'
import { FC } from 'react'
import { EnvelopesProvider, UrlSearchProvider } from '@cucumber/react-components'
import { FilteredResults } from './FilteredResults'

type Props = {
  id: string
  getUrl: string
}

export const Report: FC<Props> = ({ id, getUrl }) => {
  const { data: envelopes } = useEnvelopes(id, getUrl)
  if (!envelopes) {
    return null
  }
  return <div data-testid="report">
    <EnvelopesProvider envelopes={envelopes}>
      <UrlSearchProvider>
        <FilteredResults />
      </UrlSearchProvider>
    </EnvelopesProvider>
  </div>
}