'use client'

import { useEnvelopes } from '@/hooks/useEnvelopes'
import { FC } from 'react'
import { Results } from '@/components/Results'

type Props = {
  id: string
  getUrl: string
}

export const Report: FC<Props> = ({ id, getUrl }) => {
  const { data } = useEnvelopes(id, getUrl)
  if (!data) {
    return null
  }
  return <Results envelopes={data} />
}