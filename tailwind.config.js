/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        screens: {
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1536px',
          },
  
        extend: {
  
            animation: {
                typewriter: 'typewriter 4s steps(11) forwards',
                wiggle: 'wiggle 1s ease-in-out infinite',
                caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-6deg)' },
                    '50%': { transform: 'rotate(6deg)' },
                },
                typewriter: {
                    to: {
                        left: '100%',
                    },
                },
                blink: {
                    '0%': {
                        opacity: '0',
                    },
                    '0.1%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '1',
                    },
                    '50.1%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
            },
  
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                DEFAULT: '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
                'full': '9999px',
                'large': '12px',
            },
            height: {
                '128': '15rem',
            },
  
        },
    },
  
      darkMode: 'class', // or 'media' or 'class'
    plugins: [
         require("tailwindcss-animated"),
  
    ],
  }
  
  