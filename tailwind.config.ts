import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAFAF8',
        textMain: '#1A1A1A',
        action: '#D42B2B',
        semantic: {
          relationships: '#FFF5F5',
          existence: '#FEF2F2',
          identity: '#F5F5F4',
        }
      },
      boxShadow: {
        none: 'none',
      }
    },
  },
  plugins: [],
}
export default config
