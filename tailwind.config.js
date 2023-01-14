/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBackground': { DEFAULT: '#EDF1FC', '50': '#FFFFFF', '100': '#FFFFFF', '200': '#FFFFFF', '300': '#FFFFFF', '400': '#FFFFFF', '500': '#EDF1FC', '600': '#BDCCF4', '700': '#8DA6EC', '800': '#5D81E4', '900': '#2D5BDC' },
        'premier': { DEFAULT: '#EDF4FD', '50': '#FFFFFF', '100': '#FFFFFF', '200': '#FFFFFF', '300': '#FFFFFF', '400': '#FFFFFF', '500': '#EDF4FD', '600': '#BBD5F7', '700': '#88B6F2', '800': '#2b3147', '900': '#2379E7' },
      },
    },
  },
  plugins: [],
};