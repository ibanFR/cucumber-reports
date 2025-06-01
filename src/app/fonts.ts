import { Lato } from 'next/font/google'

export const textFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--sans-font-family',
})