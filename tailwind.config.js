/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#162B30',
        'primary-hover': '#1E3D44',
        'page-bg': '#F5F5F0',
        'page-bg2': '#F5F5F5',
        sage: {
          50:  '#F5F8F3',
          100: '#EEF4EC',
          200: '#DCE9D9',
          300: '#C5D9C0',
          400: '#9BBC94',
          500: '#72A06A',
        },
        accent: '#4CAF50',
      },
      fontFamily: { sora: ['Sora','sans-serif'] },
      boxShadow: {
        card: '0 4px 44px rgba(0,0,0,0.07)',
        nav:  '0 2px 20px rgba(0,0,0,0.06)',
        btn:  '0 4px 20px rgba(22,43,48,0.25)',
      },
      borderRadius: { '4xl':'2rem','5xl':'2.5rem' },
      keyframes: {
        fadeUp:   { from:{opacity:'0',transform:'translateY(16px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn:   { from:{opacity:'0'}, to:{opacity:'1'} },
        slideIn:  { from:{opacity:'0',transform:'translateX(20px)'}, to:{opacity:'1',transform:'translateX(0)'} },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in':'slideIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
