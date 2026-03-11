import { describe, it, expect } from 'vitest'
import { parseColor, isValidColor } from '../utils/colorParser'

describe('parseColor', () => {
  it('parses a standard 6-digit hex', () => {
    const result = parseColor('#1a2b3c')
    expect(result.isValid).toBe(true)
    expect(result.hex).toBe('#1a2b3c')
    expect(result.rgb).toEqual([26, 43, 60])
  })

  it('parses a 3-digit hex', () => {
    const result = parseColor('#fff')
    expect(result.isValid).toBe(true)
    expect(result.hex).toBe('#ffffff')
  })

  it('parses an rgb() string', () => {
    const result = parseColor('rgb(255, 0, 128)')
    expect(result.isValid).toBe(true)
    expect(result.rgb).toEqual([255, 0, 128])
  })

  it('parses an hsl() string', () => {
    const result = parseColor('hsl(210, 40%, 24%)')
    expect(result.isValid).toBe(true)
    expect(result.hsl[0]).toBeCloseTo(210, 0)
  })

  it('marks invalid input', () => {
    const result = parseColor('not-a-colour')
    expect(result.isValid).toBe(false)
  })

  it('is case-insensitive for hex', () => {
    const lower = parseColor('#aabbcc')
    const upper = parseColor('#AABBCC')
    expect(lower.rgb).toEqual(upper.rgb)
  })
})

describe('isValidColor', () => {
  it('returns true for valid colours', () => {
    expect(isValidColor('#fff')).toBe(true)
    expect(isValidColor('rgb(0,0,0)')).toBe(true)
    expect(isValidColor('white')).toBe(true)
  })

  it('returns false for invalid strings', () => {
    expect(isValidColor('')).toBe(false)
    expect(isValidColor('#gg0000')).toBe(false)
  })
})
