export type ColorFormat = 'hex' | 'rgb' | 'hsl'

export interface ParsedColor {
  hex: string
  rgb: [number, number, number]
  hsl: [number, number, number]
  isValid: boolean
}

export interface WcagResult {
  ratio: number
  AA_normal: boolean
  AA_large: boolean
  AA_ui: boolean
  AAA_normal: boolean
  AAA_large: boolean
}

export interface ContrastCheckerState {
  foreground: string
  background: string
  fgParsed: ParsedColor | null
  bgParsed: ParsedColor | null
  result: WcagResult | null
}
