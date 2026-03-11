interface ContrastRatioProps {
  ratio: number
}

function ratingLabel(ratio: number): { label: string; className: string } {
  if (ratio >= 7)   return { label: 'AAA',  className: 'bg-green-100 text-green-800' }
  if (ratio >= 4.5) return { label: 'AA',   className: 'bg-blue-100 text-blue-800' }
  if (ratio >= 3)   return { label: 'AA Large', className: 'bg-yellow-100 text-yellow-800' }
  return              { label: 'Fail', className: 'bg-red-100 text-red-800' }
}

export default function ContrastRatio({ ratio }: ContrastRatioProps) {
  const { label, className } = ratingLabel(ratio)

  return (
    <div className={`rounded-xl p-6 text-center ${className}`} role="status" aria-live="polite">
      <p className="text-sm font-medium uppercase tracking-widest opacity-70">Contrast Ratio</p>
      <p className="text-6xl font-bold mt-1" aria-label={`Contrast ratio ${ratio.toFixed(2)} to 1`}>
        {ratio.toFixed(2)}<span className="text-3xl">:1</span>
      </p>
      <p className="text-lg font-semibold mt-2">{label}</p>
    </div>
  )
}
