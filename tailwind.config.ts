import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './app/**/*.{js,ts,jsx,tsx,html}',
    './pages/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#981C1F',
        second: '#FDE799',
        subColor: '#64748B',
        tertiary: '#FFD700',
        quaternary: '#008B8B',
        active: '#991B1F',
      },
      screens: {
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-mid': { max: '950px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1200px' },
        'max-2xl': { max: '1535px' },
        'only-sm': { min: '640px', max: '767px' },
        'only-md': { min: '768px', max: '1023px' },
        'only-lg': { min: '1024px', max: '1279px' },
        'only-xl': { min: '1280px', max: '1535px' },
      },
    },
  },
  plugins: [],
} satisfies Config
