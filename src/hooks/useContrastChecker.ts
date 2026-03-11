import { useState, useMemo, useEffect, useCallback } from 'react'
import { parseColor } from '../utils/colorParser'
import { contrastRatio, evaluateWCAG } from '../utils/wcag'
import { encodeColorsToUrl, decodeColorsFromUrl } from '../utils/urlParams'
import type { WcagResult } from '../types'

const DEFAULT_FG = '#000000'
const DEFAULT_BG = '#ffffff'

export function useContrastChecker() {
  const { fg: initialFg, bg: initialBg } = decodeColorsFromUrl()

  const [foreground, setForegroundRaw] = useState(initialFg ?? DEFAULT_FG)
  const [background, setBackgroundRaw] = useState(initialBg ?? DEFAULT_BG)

  const fgParsed = useMemo(() => parseColor(foreground), [foreground])
  const bgParsed = useMemo(() => parseColor(background), [background])

  const result = useMemo<WcagResult | null>(() => {
    if (!fgParsed.isValid || !bgParsed.isValid) return null
    const ratio = contrastRatio(fgParsed.rgb, bgParsed.rgb)
    return evaluateWCAG(ratio)
  }, [fgParsed, bgParsed])

  useEffect(() => {
    if (fgParsed.isValid && bgParsed.isValid) {
      const url = encodeColorsToUrl(foreground, background)
      window.history.replaceState(null, '', url)
    }
  }, [foreground, background, fgParsed.isValid, bgParsed.isValid])

  const setForeground = useCallback((value: string) => setForegroundRaw(value), [])
  const setBackground = useCallback((value: string) => setBackgroundRaw(value), [])

  const swapColors = useCallback(() => {
    setForegroundRaw(prev => {
      setBackgroundRaw(prev)
      return background
    })
  }, [background])

  return {
    foreground,
    background,
    result,
    fgValid: fgParsed.isValid,
    bgValid: bgParsed.isValid,
    setForeground,
    setBackground,
    swapColors,
  }
}
