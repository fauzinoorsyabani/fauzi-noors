/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(131, 21, 234)',
          light: 'rgb(160, 60, 255)',
          dark: 'rgb(99, 22, 172)',
          glow: 'rgba(131, 21, 234, 0.3)',
        },
        dark: {
          DEFAULT: '#111111',
          darker: '#0c0c0c',
          card: '#1a1a1a',
          'card-hover': '#222222',
        },
        border: {
          DEFAULT: '#333333',
          light: '#444444',
        },
        text: {
          primary: '#f8f8f8',
          secondary: '#b0b0b0',
          muted: '#888888',
        },
      },
      fontFamily: {
        main: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
      },
      boxShadow: {
        'card': '0 5px 20px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 30px rgba(131, 21, 234, 0.2)',
        'glow-lg': '0 0 40px rgba(131, 21, 234, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(131, 21, 234, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(131, 21, 234, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
