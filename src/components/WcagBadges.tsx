import type { WcagResult } from '../types'

interface WcagBadgesProps {
  result: WcagResult
}

interface Badge {
  label: string
  pass: boolean
  criterion: string
}

export default function WcagBadges({ result }: WcagBadgesProps) {
  const badges: Badge[] = [
    { label: 'AA Normal Text',  pass: result.AA_normal,  criterion: '≥ 4.5:1' },
    { label: 'AA Large Text',   pass: result.AA_large,   criterion: '≥ 3.0:1' },
    { label: 'AA UI Component', pass: result.AA_ui,      criterion: '≥ 3.0:1' },
    { label: 'AAA Normal Text', pass: result.AAA_normal, criterion: '≥ 7.0:1' },
    { label: 'AAA Large Text',  pass: result.AAA_large,  criterion: '≥ 4.5:1' },
  ]

  return (
    <section aria-label="WCAG compliance badges">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        WCAG 2.1 Compliance
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map(({ label, pass, criterion }) => (
          <div
            key={label}
            className={`rounded-lg p-3 flex flex-col items-center gap-1
              ${pass ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
            role="status"
            aria-label={`${label}: ${pass ? 'Pass' : 'Fail'}`}
          >
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full
              ${pass ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {pass ? 'PASS' : 'FAIL'}
            </span>
            <span className="text-xs font-medium text-gray-700 text-center">{label}</span>
            <span className="text-xs text-gray-400">{criterion}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
