/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // آبی سفارشی
        secondary: '#F59E0B', // زرد سفارشی
        YellowGreen: '#97d700',    // قرمز
        DarkGray:"#333",
        white:"#fff",
        lightGray:"#f3f4f6",
        light:"#f8f9fa",
      },
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'], 
        ShabnamBold:['Shabnam-Bold'],
        ShabnamMedium:['Shabnam-Medium'],
        ShabnamLight:['Shabnam-Light'],
        PlaypenExtraBold:['PlaypenSansArabic-ExtraBold'],
        PlaypenBold:['PlaypenSansArabic-Bold'],
        PlaypenMedium:['PlaypenSansArabic-Medium'],
        PlaypenLight:['PlaypenSansArabic-Light'],
      },
    },
  },
  plugins: [],
}