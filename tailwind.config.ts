import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: colors.transparent,
      primary: { DEFAULT: '#28C6F8', 100: '#ADE6FB', 200: '#479EF5' },
      green: { DEFAULT: '#13A10E' },
      black: {
        DEFAULT: '#030506',
        100: '#3D3D3D',
        200: '#1F1F1F',
        300: '#404040'
      },
      white: { DEFAULT: '#FFFFFF' },
      blue: { 500: '#3b82f6' }
    }
  },
  plugins: []
} satisfies Config
