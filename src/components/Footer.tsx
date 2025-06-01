import Link from 'next/link'
import { FC } from 'react'

export const Footer: FC = () => {
  return <footer className="p-5 text-sm text-center bg-slate-50">
    Copyright © 2025 The Cucumber Open Source Project<br />
    <Link className="underline" href="/terms">Terms & Privacy</Link>
  </footer>
}
