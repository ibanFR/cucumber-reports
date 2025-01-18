import { banner, Modifier } from './banner'

export function makeBanner(reportUrl: string): string {
  return banner(
    [
      'View your Cucumber Report at:',
      [[reportUrl, Modifier.bold, Modifier.cyan, Modifier.underline]],
      '',
      [['This report will self-destruct in 24h.', Modifier.bold]],
    ],
    [Modifier.green, Modifier.bold],
  )
}