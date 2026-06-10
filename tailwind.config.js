/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        piggy: {
          bg: 'var(--color-bg)',
          surface: {
            base: 'var(--color-surface-base)',
            card: 'var(--color-surface-card)',
            elevated: 'var(--color-surface-elevated)',
            active: 'var(--color-surface-active)',
          },
          accent: {
            hero: 'var(--color-accent-hero)',
            secondary: 'var(--color-accent-secondary)',
          },
          semantic: {
            xp: 'var(--color-xp)',
            streak: 'var(--color-streak)',
            challenge: 'var(--color-challenge)',
            danger: 'var(--color-danger)',
          },
          text: {
            heading: 'var(--text-heading)',
            body: 'var(--text-body)',
            muted: 'var(--text-muted)',
          }
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'xs': '11px',
        'sm': '13px',
        'base': '15px',
        'md': '18px',
        'lg': '24px',
        'xl': '36px',
      },
      letterSpacing: {
        'caps': '0.1em',
      }
    },
  },
  plugins: [],
}
