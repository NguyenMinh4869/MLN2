import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        sepia: {
          900: '#1f130b',
          800: '#3a2614',
          600: '#6b4a2b',
          400: '#b28a5a',
        },
        modern: {
          900: '#020617',
          700: '#0f172a',
          500: '#38bdf8',
          300: '#7dd3fc',
        },
      },
      backgroundImage: {
        'rail-gradient':
          'linear-gradient(to bottom, #0b0b10 0%, #1f130b 20%, #111827 55%, #0f172a 70%, #020617 100%)',
      },
      boxShadow: {
        'soft-xl':
          '0 25px 50px -12px rgba(0,0,0,0.55), 0 0 40px rgba(148,163,184,0.25)',
      },
    },
  },
  plugins: [],
}

export default config

