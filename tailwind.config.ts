import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      colors: {
        primary: '#1B3A5C',
        secondary: '#2D6A9F',
        accent: '#FF6B2C',
        background: '#F8FAFB',
        surface: '#FFFFFF',
        text: '#1A1A2E',
        'text-muted': '#6B7A8D',
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
        dark: '#0F1C2E',
      },
    },
  },
  plugins: [],
};

export default config;
