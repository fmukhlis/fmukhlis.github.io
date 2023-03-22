const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'slate-blur': 'rgba(192, 194, 201, 0.5)',
        'main-analogous-1': '#FFA85A',
        main: '#FF5A5F',
        'main-analogous-2': '#FF5AB2',
        
      },
      animation: {
        'sparkling-sm-slow': 'sparkling-sm 3.5s linear infinite',
        'sparkling-lg-slow': 'sparkling-lg 3.5s linear infinite',
      },
      keyframes: {
        'sparkling-sm': {
          '0%' : {
            transform: 'translate(-15rem) rotate(25deg)',
            opacity: '.2',
          },
          '50%' : {transform: 'translate(10rem) rotate(25deg)'},
          '51%' : {opacity: '0'},
          '100%' : {
            transform: 'translate(-15rem) rotate(25deg)', 
            opacity: '0',
          },
        },
        'sparkling-lg': {
          '0%' : {
            transform: 'translate(-45rem) rotate(25deg)',
            opacity: '.2',
          },
          '50%' : {transform: 'translate(10rem) rotate(25deg)'},
          '51%' : {opacity: '0'},
          '100%' : {
            transform: 'translate(-45rem) rotate(25deg)', 
            opacity: '0',
          },
        },
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({        
        '.text-shadow-sm': {
          textShadow: '0px 2px 0px var(--shadow-color)',
        },                
        '.text-shadow-lg': {
          textShadow: '0px 6px 0px var(--shadow-color)',
        },    
        '.text-shadow': {
          textShadow: '0px 4px 0px var(--shadow-color)',
        },
        '.t-s-main': {
          '--shadow-color': 'rgb(185, 28, 28)',
        }
      })
    })
  ],
}
