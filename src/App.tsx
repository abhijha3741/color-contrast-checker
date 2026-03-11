import { Analytics } from '@vercel/analytics/react'
import { useContrastChecker } from './hooks/useContrastChecker'
import ColorInput from './components/ColorInput'
import SwapButton from './components/SwapButton'
import ContrastRatio from './components/ContrastRatio'
import WcagBadges from './components/WcagBadges'
import LivePreview from './components/LivePreview'
import Suggestions from './components/Suggestions'
import ShareButton from './components/ShareButton'
import CTABanner from './components/CTABanner'

export default function App() {
  const {
    foreground, background, result, fgValid, bgValid,
    setForeground, setBackground, swapColors,
  } = useContrastChecker()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Color Contrast Checker
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
          WCAG 2.1 AA &amp; AAA compliance — instant results
        </p>
      </header>

      <main className="w-full max-w-2xl space-y-6">
        <div className="grid grid-cols-2 gap-4 items-end">
          <ColorInput
            label="Foreground"
            value={foreground}
            isValid={fgValid}
            onChange={setForeground}
          />
          <ColorInput
            label="Background"
            value={background}
            isValid={bgValid}
            onChange={setBackground}
          />
        </div>

        <div className="flex justify-center">
          <SwapButton onClick={swapColors} />
        </div>

        {result && (
          <>
            <ContrastRatio ratio={result.ratio} />
            <WcagBadges result={result} />
            <LivePreview foreground={foreground} background={background} />
            <Suggestions
              foreground={foreground}
              background={background}
              result={result}
              onSelectColor={setForeground}
            />
            <ShareButton foreground={foreground} background={background} />
          </>
        )}
      </main>

      <CTABanner />
      <Analytics />
    </div>
  )
}
