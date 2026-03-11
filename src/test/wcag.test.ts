import { describe, it, expect } from 'vitest'
import { relativeLuminance, contrastRatio, evaluateWCAG } from '../utils/wcag'

describe('relativeLuminance', () => {
  it('returns 0 for pure black', () => {
    expect(relativeLuminance([0, 0, 0])).toBe(0)
  })

  it('returns 1 for pure white', () => {
    expect(relativeLuminance([255, 255, 255])).toBeCloseTo(1, 5)
  })

  it('returns approx 0.2126 for pure red', () => {
    expect(relativeLuminance([255, 0, 0])).toBeCloseTo(0.2126, 2)
  })

  it('returns approx 0.7152 for pure green', () => {
    expect(relativeLuminance([0, 255, 0])).toBeCloseTo(0.7152, 2)
  })

  it('returns approx 0.0722 for pure blue', () => {
    expect(relativeLuminance([0, 0, 255])).toBeCloseTo(0.0722, 2)
  })
})

describe('contrastRatio', () => {
  it('returns 21 for black on white', () => {
    const ratio = contrastRatio([0, 0, 0], [255, 255, 255])
    expect(ratio).toBeCloseTo(21, 1)
  })

  it('returns 1 for identical colours', () => {
    const ratio = contrastRatio([128, 128, 128], [128, 128, 128])
    expect(ratio).toBeCloseTo(1, 5)
  })

  it('is symmetric — fg/bg order does not matter', () => {
    const r1 = contrastRatio([26, 43, 60], [255, 255, 255])
    const r2 = contrastRatio([255, 255, 255], [26, 43, 60])
    expect(r1).toBeCloseTo(r2, 5)
  })

  it('matches WebAIM reference: #767676 on white ≈ 4.54', () => {
    // #767676 = RGB(118, 118, 118)
    const ratio = contrastRatio([118, 118, 118], [255, 255, 255])
    expect(ratio).toBeCloseTo(4.54, 1)
  })

  it('matches reference: #595959 on white ≈ 7.0 (AAA)', () => {
    const ratio = contrastRatio([89, 89, 89], [255, 255, 255])
    expect(ratio).toBeGreaterThanOrEqual(7.0)
  })
})

describe('evaluateWCAG', () => {
  it('all pass at ratio 21 (black on white)', () => {
    const result = evaluateWCAG(21)
    expect(result.AA_normal).toBe(true)
    expect(result.AA_large).toBe(true)
    expect(result.AA_ui).toBe(true)
    expect(result.AAA_normal).toBe(true)
    expect(result.AAA_large).toBe(true)
  })

  it('all fail at ratio 1 (identical colours)', () => {
    const result = evaluateWCAG(1)
    expect(result.AA_normal).toBe(false)
    expect(result.AA_large).toBe(false)
    expect(result.AA_ui).toBe(false)
    expect(result.AAA_normal).toBe(false)
    expect(result.AAA_large).toBe(false)
  })

  it('ratio 4.5 passes AA normal but not AAA normal', () => {
    const result = evaluateWCAG(4.5)
    expect(result.AA_normal).toBe(true)
    expect(result.AAA_normal).toBe(false)
  })

  it('ratio 3.0 passes AA large and UI but fails AA normal', () => {
    const result = evaluateWCAG(3.0)
    expect(result.AA_large).toBe(true)
    expect(result.AA_ui).toBe(true)
    expect(result.AA_normal).toBe(false)
  })

  it('ratio 7.0 passes AAA normal', () => {
    const result = evaluateWCAG(7.0)
    expect(result.AAA_normal).toBe(true)
  })
})
