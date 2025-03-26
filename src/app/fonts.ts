import { Lato, JetBrains_Mono } from 'next/font/google'

export const textFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--cucumber-sans-font-family',
})

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--cucumber-mono-font-family',
})