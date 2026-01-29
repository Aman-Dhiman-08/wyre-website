/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors - White, Blue, Orange
        blue: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#046BD2',
          600: '#0355a8',
          700: '#024080',
          800: '#012B58',
          900: '#001830',
          DEFAULT: '#046BD2',
        },
        orange: {
          50: '#FFF4F0',
          100: '#FFE4D9',
          200: '#FFC9B3',
          300: '#FFAE8D',
          400: '#FF8C5A',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4A21',
          800: '#993815',
          900: '#66250E',
          DEFAULT: '#FF6B35',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient': 'gradient-flow 8s ease infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(4, 107, 210, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(4, 107, 210, 0.5)' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'modern': '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 16px 32px rgba(0, 0, 0, 0.04)',
        'modern-lg': '0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.06), 0 24px 48px rgba(0, 0, 0, 0.08)',
        'blue': '0 10px 40px -10px rgba(4, 107, 210, 0.3)',
        'orange': '0 10px 40px -10px rgba(255, 107, 53, 0.3)',
      },
    },
  },
  plugins: [],
}
