interface LivePreviewProps {
  foreground: string
  background: string
}

export default function LivePreview({ foreground, background }: LivePreviewProps) {
  return (
    <section aria-label="Live text preview">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Live Preview
      </h2>
      <div
        className="rounded-xl p-6 border border-gray-200"
        style={{ backgroundColor: background, color: foreground }}
      >
        <p className="text-2xl font-bold mb-2">The quick brown fox</p>
        <p className="text-base mb-2">
          Normal body text — 16px regular weight. This paragraph demonstrates how
          readable your chosen colour combination is for everyday reading.
        </p>
        <p className="text-sm">
          Small text — 14px. Consider how this reads against your background before publishing.
        </p>
        <button
          className="mt-4 px-4 py-2 rounded-lg text-sm font-medium border"
          style={{ borderColor: foreground, color: foreground }}
          tabIndex={-1}
          aria-hidden="true"
        >
          Sample UI Button
        </button>
      </div>
    </section>
  )
}
