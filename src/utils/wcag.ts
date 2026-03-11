import type { WcagResult } from '../types'

function linearise(channel: number): number {
  const s = channel / 255
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
}

export function relativeLuminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map(linearise)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrastRatio(
  foreground: [number, number, number],
  background: [number, number, number]
): number {
  const l1 = relativeLuminance(foreground)
  const l2 = relativeLuminance(background)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export function evaluateWCAG(ratio: number): WcagResult {
  return {
    ratio,
    AA_normal: ratio >= 4.5,
    AA_large: ratio >= 3.0,
    AA_ui: ratio >= 3.0,
    AAA_normal: ratio >= 7.0,
    AAA_large: ratio >= 4.5,
  }
}
