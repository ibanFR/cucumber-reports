type Line = Span | Span[]
type Span = string | StyledString
type StyledString = [string, ...Modifier[]]

export enum Modifier {
  bold = '\u001b[1m',
  red = '\u001b[31m',
  green = '\u001b[32m',
  cyan = '\u001b[36m',
  underline = '\u001b[4m',
  reset = '\u001b[0m',
}

export function banner(lines: Line[], borderModifiers: Modifier[]): string {
  const lineLengths = lines.map((line) => lineLength(line))
  const maxLineLength = Math.max(...lineLengths)
  return [
    ansicolor(`┌${repeat(maxLineLength + 2, '─')}┐`, borderModifiers),
    ...lines.map((line) => formatLine(line, maxLineLength, borderModifiers)),
    ansicolor(`└${repeat(maxLineLength + 2, '─')}┘`, borderModifiers),
    '',
  ].join('\n')
}

function lineLength(line: Line): number {
  return Array.isArray(line) ? spansLength(line) : spansLength([line])
}

function formatLine(line: Line, maxLineLength: number, borderModifiers: Modifier[]) {
  return Array.isArray(line)
    ? formatSpans(line, maxLineLength, borderModifiers)
    : formatSpans([line], maxLineLength, borderModifiers)
}

function formatSpans(spans: Span[], maxLineLength: number, borderModifiers: Modifier[]): string {
  const padding = maxLineLength - spansLength(spans)
  return `${ansicolor('│', borderModifiers)} ${spans
    .map((span) => formatSpan(span))
    .join('')}${repeat(padding, ' ')} ${ansicolor('│', borderModifiers)}`
}

function formatSpan(span: Span): string {
  if (typeof span === 'string') return span
  return formatStyledString(span)
}

function formatStyledString(styledString: StyledString) {
  return ansicolor(styledString[0], styledString.slice(1) as Modifier[]) // TypeScript you let me down :-(
}

function spansLength(span: Span[]): number {
  return span.reduce((length, span) => spanLength(span) + length, 0)
}

function spanLength(span: Span) {
  if (typeof span === 'string') return span.length
  return span[0].length
}

function repeat(length: number, char: string): string {
  return new Array(length + 1).join(char)
}

function ansicolor(s: string, modifiers: Modifier[]) {
  return `${modifiers.join('')}${s}${Modifier.reset}`
}
