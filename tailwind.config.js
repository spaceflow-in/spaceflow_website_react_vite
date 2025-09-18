/** @type {import('tailwindcss').Config} */
export default {
  // Content path is now often configured directly in the plugin, 
  // but keeping it here is standard practice.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFD100',
        'dark-bg': '#1A1A1A',
        'text-primary': '#333333',
        'text-secondary': '#555555',
        'border-light': '#EAEAEA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  plugins: [],
}