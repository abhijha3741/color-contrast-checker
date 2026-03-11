import { describe, it, expect } from 'vitest'
import { suggestAccessibleColors } from '../utils/suggestions'

describe('suggestAccessibleColors', () => {
  it('returns null for both when background is invalid', () => {
    const result = suggestAccessibleColors('#cccccc', 'not-a-colour')
    expect(result.lighter).toBeNull()
    expect(result.darker).toBeNull()
  })

  it('finds a darker suggestion for light gray on white', () => {
    const result = suggestAccessibleColors('#cccccc', '#ffffff')
    expect(result.darker).not.toBeNull()
    expect(result.darker).toMatch(/^#[0-9a-f]{6}$/)
  })

  it('finds a lighter suggestion for dark gray on black', () => {
    const result = suggestAccessibleColors('#333333', '#000000')
    expect(result.lighter).not.toBeNull()
  })
})
