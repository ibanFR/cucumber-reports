import { FC } from 'react'
import logo from '@/app/icon.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Masthead: FC = () => {
  return <nav className="flex items-center p-3 gap-2 bg-white shadow-sm">
    <Link href="/" className="contents">
      <Image alt="" src={logo} width="30" height="30" />
      <b>Cucumber Reports</b>
    </Link>
  </nav>
}