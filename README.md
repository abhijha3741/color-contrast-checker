# Color Contrast Checker

A free, real-time **WCAG 2.1** color contrast checker built with React, TypeScript, and Vite. Enter any Hex, RGB, or HSL color pair and instantly see AA & AAA pass/fail status for normal text, large text, and UI components.

🔗 **Live:** [contrast.smartroots.us](https://contrast.smartroots.us/)

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **Real-time contrast ratio** | Calculates contrast ratio as you type |
| **WCAG 2.1 AA & AAA badges** | Instant pass/fail indicators for normal text, large text, and UI components |
| **Multi-format color input** | Accepts Hex (`#1a2b3c`), RGB (`rgb(26,43,60)`), and HSL (`hsl(210,40%,17%)`) |
| **Live preview** | See your color pair applied to sample text in real time |
| **Accessible color suggestions** | Get suggested foreground adjustments when contrast fails |
| **Swap colors** | One-click swap between foreground and background |
| **Shareable links** | Share a specific color combination via URL parameters |
| **Vercel Analytics** | Built-in anonymous usage analytics |

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript 5.9](https://www.typescriptlang.org/)
- **Build tool:** [Vite 5](https://vite.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Color library:** [tinycolor2](https://github.com/bgrins/TinyColor)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Font:** [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter)

---

## 📁 Project Structure

```
color-contrast-checker/
├── public/                  # Static assets (favicon, OG image, etc.)
├── src/
│   ├── components/          # React UI components
│   │   ├── ColorInput.tsx       # Hex/RGB/HSL color input with swatch
│   │   ├── ContrastRatio.tsx    # Contrast ratio display
│   │   ├── CTABanner.tsx        # Call-to-action banner
│   │   ├── LivePreview.tsx      # Real-time text preview
│   │   ├── ShareButton.tsx      # Copy shareable link
│   │   ├── Suggestions.tsx      # Accessible color suggestions
│   │   ├── SwapButton.tsx       # Swap foreground ↔ background
│   │   └── WcagBadges.tsx       # AA/AAA pass/fail badges
│   ├── hooks/
│   │   └── useContrastChecker.ts  # Core hook (state, parsing, WCAG logic)
│   ├── types/
│   │   └── index.ts             # Shared TypeScript interfaces
│   ├── utils/
│   │   ├── colorParser.ts       # Parses and validates color strings
│   │   ├── suggestions.ts       # Generates accessible color alternatives
│   │   ├── urlParams.ts         # Read/write color values to URL params
│   │   └── wcag.ts              # WCAG 2.1 contrast ratio calculations
│   ├── test/
│   │   ├── setup.ts             # Vitest setup (jest-dom matchers)
│   │   ├── colorParser.test.ts  # Color parser unit tests
│   │   ├── suggestions.test.ts  # Suggestion engine tests
│   │   └── wcag.test.ts         # WCAG calculation tests
│   ├── App.tsx                  # Root application component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html               # HTML shell (includes SEO meta & structured data)
├── vite.config.ts            # Vite + Vitest config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── tsconfig.json             # TypeScript base config
├── tsconfig.app.json         # App-specific TS config
├── tsconfig.node.json        # Node/Vite TS config
├── eslint.config.js          # ESLint flat config
├── vercel.json               # Vercel deployment settings & security headers
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (ships with Node 18+)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/smartroots/color-contrast-checker.git
cd color-contrast-checker

# 2. Install dependencies
npm install
```

### Running Locally

```bash
# Start the dev server (hot-reload enabled)
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Building for Production

```bash
# Type-check & bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 🧪 Testing

```bash
# Run tests in watch mode
npm test

# Run tests once (CI-friendly)
npm run test:run

# Run tests with coverage report
npm run test:coverage
```

---

## 🧹 Linting & Type Checking

```bash
# Lint with ESLint
npm run lint

# Type-check without emitting files
npm run type-check
```

---

## 📜 Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Type-check and create production build |
| `preview` | `npm run preview` | Serve the production build locally |
| `test` | `npm test` | Run Vitest in watch mode |
| `test:run` | `npm run test:run` | Run Vitest once |
| `test:coverage` | `npm run test:coverage` | Run Vitest with coverage |
| `lint` | `npm run lint` | Run ESLint |
| `type-check` | `npm run type-check` | Run TypeScript compiler (no emit) |

---

## 🌐 Deployment

The project is configured for **Vercel** out of the box.

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel will auto-detect the Vite framework and use the settings from `vercel.json`:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm ci`
4. Security headers (CSP, X-Frame-Options, etc.) are pre-configured in `vercel.json`.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private. All rights reserved by [Smartroots](https://smartroots.us/).
