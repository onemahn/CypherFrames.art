import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        accent: {
          DEFAULT: '#c9a227',
          foreground: '#090909',
        },
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: '#111111',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#141414',
          foreground: '#bfbfbf',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.35em',
        'wide-luxe': '0.2em',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      screens: {
        'ultrawide': '1920px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
