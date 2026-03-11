import { parseColor } from '../utils/colorParser'

interface ColorInputProps {
  label: string
  value: string
  isValid: boolean
  onChange: (value: string) => void
}

export default function ColorInput({ label, value, isValid, onChange }: ColorInputProps) {
  const parsed = parseColor(value)
  const pickerHex = parsed.isValid ? parsed.hex : '#000000'

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className={`flex items-center border rounded-lg overflow-hidden
        ${isValid ? 'border-gray-300' : 'border-red-400'}`}>

        <label
          className="cursor-pointer w-10 h-10 flex-shrink-0 border-r border-gray-300"
          title={`Open ${label.toLowerCase()} colour picker`}
          style={{ backgroundColor: pickerHex }}
        >
          <input
            type="color"
            className="sr-only"
            value={pickerHex}
            onChange={(e) => onChange(e.target.value)}
            aria-label={`${label} colour picker`}
          />
        </label>

        <input
          type="text"
          className="flex-1 px-3 py-2 text-sm font-mono bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#1a2b3c"
          aria-label={`${label} colour value`}
          aria-invalid={!isValid}
        />
      </div>

      {!isValid && (
        <p className="text-xs text-red-500" role="alert">
          Enter a valid hex, rgb(), or hsl() value
        </p>
      )}
    </div>
  )
}
