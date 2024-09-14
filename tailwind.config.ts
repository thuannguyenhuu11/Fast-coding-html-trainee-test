import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueLight: '#81e4ed',
        blueNormal: '#e8fcfe',
        blueMedium: '#2aacc8',
        greyPrimary: '#e8ebf1',
        greySecondary: '#dfe1e5',
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'sans-serif'],
        arialMt: ['var(--font-arialMt)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
