import { useMemo } from 'react'
import { suggestAccessibleColors } from '../utils/suggestions'
import type { WcagResult } from '../types'

interface SuggestionsProps {
  foreground: string
  background: string
  result: WcagResult
  onSelectColor?: (color: string) => void
}

export default function Suggestions({ foreground, background, result, onSelectColor }: SuggestionsProps) {
  const { lighter, darker } = useMemo(
    () => suggestAccessibleColors(foreground, background),
    [foreground, background]
  )

  if (result.AA_normal) return null
  if (!lighter && !darker) return null

  return (
    <section aria-label="Accessible colour suggestions">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Suggested Fixes (AA Normal Text)
      </h2>
      <div className="flex gap-3">
        {lighter && (
          <SuggestionSwatch
            color={lighter}
            background={background}
            label="Lighter"
            onClick={() => onSelectColor?.(lighter)}
          />
        )}
        {darker && (
          <SuggestionSwatch
            color={darker}
            background={background}
            label="Darker"
            onClick={() => onSelectColor?.(darker)}
          />
        )}
      </div>
    </section>
  )
}

function SuggestionSwatch({
  color, background, label, onClick
}: { color: string; background: string; label: string; onClick?: () => void }) {
  return (
    <div
      className="flex-1 rounded-xl p-4 border border-gray-200 text-center cursor-pointer
        hover:border-blue-400 transition"
      style={{ backgroundColor: background, color }}
      role="button"
      tabIndex={0}
      aria-label={`Use ${label.toLowerCase()} suggestion: ${color}`}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.() }}
    >
      <p className="text-sm font-semibold">Sample Text</p>
      <p className="text-xs font-mono mt-1 opacity-70">{color}</p>
      <p className="text-xs mt-1" style={{ color: 'gray' }}>{label}</p>
    </div>
  )
}
