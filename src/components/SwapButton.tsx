interface SwapButtonProps {
  onClick: () => void
}

export default function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600
        bg-white border border-gray-300 rounded-full hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      aria-label="Swap foreground and background colours"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 5h12M10 2l4 3-4 3M14 11H2M6 8l-4 3 4 3"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Swap colours
    </button>
  )
}
