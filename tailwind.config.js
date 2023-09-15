/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '58': '14.5rem'
      },
      spacing: {
        '88': '5.5rem',
        '96': '6rem',
        '128': '8rem'
      },
      colors: {
        'primary': '#1ed760'
      },
      rotate: {
        '25': '25deg',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp')
  ],
}

