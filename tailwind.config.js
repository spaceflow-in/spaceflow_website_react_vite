// File: tailwind.config.js (Updated)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D', // New near-black background
        primary: '#E4B400',    // New vibrant gold accent
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A3', // New subtle light grey for paragraphs
      },
      fontFamily: {
        // 'sans' is now Clash Display for headings
        sans: ['Clash Display', 'sans-serif'], 
        // We add a new utility 'font-body' for Satoshi
        body: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}