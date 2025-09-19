import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        serif: ['ui-serif','Georgia','Cambria','Times New Roman','Times','serif'],
        sans: ['ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif'],
      },
      colors: {
        brand: { DEFAULT: '#111827', soft: '#374151', accent: '#0ea5e9' },
        border: '#e5e7eb',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            maxWidth: '70ch',
            a: { textDecoration: 'none', color: theme('colors.gray.900') },
            'a:hover': { textDecoration: 'underline' },
            img: { borderRadius: '0.5rem' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
export default config
