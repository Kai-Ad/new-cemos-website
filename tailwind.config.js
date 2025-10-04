/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        dark: {
          background: '#0A192F',
          content: '#172A45',
          text: '#E6F1FF',
          accent: '#64FFDA',
        },
        light: {
          background: '#FFFFFF',
          content: '#F8F9FA',
          text: '#212529',
          accent: '#0D6EFD',
        },
      },
      letterSpacing: {
        'heading': '0.05em',
      },
    },
  },
  plugins: [],
}