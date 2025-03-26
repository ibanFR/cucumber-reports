import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { monoFont, textFont } from './fonts'
import { Masthead } from '@/components/Masthead'

export const metadata: Metadata = {
  title: 'Cucumber Reports',
}

export default function RootLayout({ children }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${textFont.variable} ${monoFont.variable} antialiased`}>
    <Masthead />
    {children}
    </body>
    </html>
  )
}
