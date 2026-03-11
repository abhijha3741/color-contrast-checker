import tinycolor from 'tinycolor2'
import type { ParsedColor } from '../types'

export function parseColor(input: string): ParsedColor {
  const tc = tinycolor(input.trim())
  if (!tc.isValid()) {
    return { hex: '#000000', rgb: [0, 0, 0], hsl: [0, 0, 0], isValid: false }
  }
  const { r, g, b } = tc.toRgb()
  const { h, s, l } = tc.toHsl()
  return {
    hex: tc.toHexString(),
    rgb: [r, g, b],
    hsl: [Math.round(h), Math.round(s * 100), Math.round(l * 100)],
    isValid: true,
  }
}

export function isValidColor(input: string): boolean {
  return tinycolor(input.trim()).isValid()
}
