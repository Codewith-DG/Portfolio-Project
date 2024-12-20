/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#d1e7fe',
      },

    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

