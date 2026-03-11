import tinycolor from 'tinycolor2'
import { contrastRatio } from './wcag'
import { parseColor } from './colorParser'

const AA_NORMAL = 4.5
const STEP = 2
const MAX_ITERATIONS = 50

export function suggestAccessibleColors(
  foreground: string,
  background: string
): { lighter: string | null; darker: string | null } {
  const bgParsed = parseColor(background)
  if (!bgParsed.isValid) return { lighter: null, darker: null }

  function search(direction: 'lighten' | 'darken'): string | null {
    let tc = tinycolor(foreground)
    for (let i = 0; i < MAX_ITERATIONS; i++) {
      tc = direction === 'lighten' ? tc.lighten(STEP) : tc.darken(STEP)
      const rgb = tc.toRgb()
      const ratio = contrastRatio(
        [rgb.r, rgb.g, rgb.b],
        bgParsed.rgb
      )
      if (ratio >= AA_NORMAL) return tc.toHexString()
    }
    return null
  }

  return {
    lighter: search('lighten'),
    darker: search('darken'),
  }
}
