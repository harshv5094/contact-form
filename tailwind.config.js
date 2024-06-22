/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cus-green-200': 'hsl(148, 38%, 91%)',
        'cus-green-600': 'hsl(169, 82%, 27%)',
        'cus-red': 'hsl(0, 66%, 54%)',
        'cus-white': 'hsl(0, 0%, 100%)',
        'cus-grey-500': 'hsl(186, 15%, 59%)',
        'cus-grey-900': 'hsl(187, 24%, 22%)'
      }
    }
  },
  plugins: []
}
