/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {}
  },
  plugins: []
}
