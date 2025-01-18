'use client'

import { FC } from 'react'
import { Envelope } from '@cucumber/messages'
import { components, searchFromURLParams } from '@cucumber/react-components'

const { CucumberReact } = components
const { EnvelopesWrapper, FilteredResults, SearchWrapper } = components.app

type Props = {
  envelopes: ReadonlyArray<Envelope>
}

export const Results: FC<Props> = ({ envelopes }) => {
  return <CucumberReact theme="auto">
    <EnvelopesWrapper envelopes={envelopes}>
      <SearchWrapper {...searchFromURLParams()}>
        <FilteredResults />
      </SearchWrapper>
    </EnvelopesWrapper>
  </CucumberReact>
}