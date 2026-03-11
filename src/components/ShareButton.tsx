import { useState } from 'react'
import { encodeColorsToUrl } from '../utils/urlParams'

interface ShareButtonProps {
  foreground: string
  background: string
}

export default function ShareButton({ foreground, background }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const url = encodeColorsToUrl(foreground, background)
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="w-full py-2 px-4 rounded-lg border border-gray-300 text-sm font-medium
        text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2
        focus:ring-blue-500 transition"
      aria-label="Copy share link to clipboard"
    >
      {copied ? 'Link copied!' : 'Share this combination'}
    </button>
  )
}
