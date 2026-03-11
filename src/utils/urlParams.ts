export function encodeColorsToUrl(foreground: string, background: string): string {
  const params = new URLSearchParams()
  params.set('fg', foreground.replace(/^#/, ''))
  params.set('bg', background.replace(/^#/, ''))
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`
}

export function decodeColorsFromUrl(): { fg: string | null; bg: string | null } {
  const params = new URLSearchParams(window.location.search)
  const fg = params.get('fg')
  const bg = params.get('bg')
  return {
    fg: fg ? (fg.startsWith('#') ? fg : `#${fg}`) : null,
    bg: bg ? (bg.startsWith('#') ? bg : `#${bg}`) : null,
  }
}
