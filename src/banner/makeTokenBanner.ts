import { banner, Modifier } from '@/banner/banner'

export function makeTokenBanner(): string {
  return banner(
    [
      'Private reports are no longer supported.',
      'You can still publish anonymous (public) reports',
      'by removing the token from your configuration.',
    ],
    [Modifier.red],
  )
}