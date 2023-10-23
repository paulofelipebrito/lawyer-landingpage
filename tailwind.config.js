/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'calc-25-min-10': 'calc(25% - 10px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        defaultColor: "#BFAA7E"
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        // raleway: ["'Raleway'", "Sans-serif"],
        raleway: "var(--raleway)"
      },
      keyframes:{
        fadeIn:{
          "from":{
            opacity: "0"
          },        
          "to":{
            opacity: "1"
          }
        },
        fadeOut:{
          "from":{
            opacity: "1"
          },        
          "to":{
            opacity: "0"
          }
        },
        slideDown:{
          "from":{
            transform: "translateY(-100%)"
          },        
          "to":{
            transform: "translateY(0)"
          }
        },
        slideUp:{
          "from":{
            transform: "translateY(0)"
          },        
          "to":{
            transform: "translateY(-100%)"
          }
        },
      },
      animation: {
        'slide-up': 'slideUp 200ms ease-in-out forwards',
        'slide-down': 'slideDown 300ms ease-in-out ',
        'fade-out': 'fadeOut 200ms ease-in-out forwards',
        'fade-in': 'fadeIn 300ms ease-in-out',
      }
    },
  },
  plugins: [],
}