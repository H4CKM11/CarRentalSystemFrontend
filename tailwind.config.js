/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F27405',
        'primary-peach': '#F24535',
        'primary-red': '#F20505',
        'secondary-peach': '#F25252',
        'primary-black': '#0D0D0D'
      },
    },
  },
  plugins: [],
}
