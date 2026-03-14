import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
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
        brand: {
          dark: '#050505',
          gold: '#FFD700',
          red: '#E63946',
          blue: '#4A90E2',
        }
      },
      backgroundImage: {
        'rail-gradient':
          'linear-gradient(to bottom, #0b0b10 0%, #1f130b 20%, #111827 55%, #0f172a 70%, #020617 100%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'soft-xl':
          '0 25px 50px -12px rgba(0,0,0,0.55), 0 0 40px rgba(148,163,184,0.15)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'glow-blue': '0 0 20px rgba(74, 144, 226, 0.3)',
        'glow-red': '0 0 20px rgba(230, 57, 70, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config

