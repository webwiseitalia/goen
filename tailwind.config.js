/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e0f0',
          200: '#b3c1e0',
          300: '#8da2d1',
          400: '#6783c1',
          500: '#1b2a4a',
          600: '#172340',
          700: '#131c36',
          800: '#0f152c',
          900: '#0b0e22',
        },
        lake: {
          50: '#e6f4f9',
          100: '#cce9f3',
          200: '#99d3e7',
          300: '#66bddb',
          400: '#33a7cf',
          500: '#2a7fb5',
          600: '#1e6a9a',
          700: '#15547d',
          800: '#0d3f61',
          900: '#062a44',
        },
        gold: {
          50: '#fdf8ef',
          100: '#faefd9',
          200: '#f5dfb3',
          300: '#f0cf8d',
          400: '#ebbf67',
          500: '#d4a94a',
          600: '#b8923d',
          700: '#9c7b30',
          800: '#806423',
          900: '#644d16',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e7',
          300: '#f7eddb',
          400: '#f4e7cf',
          500: '#f1e1c3',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
