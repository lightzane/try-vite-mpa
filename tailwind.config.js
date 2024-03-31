import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        enter: 'enter .5s ease-in-out forwards',
        heart: 'heart 1s infinite',
      },
      keyframes: {
        enter: {
          from: {
            opacity: 0,
            filter: 'blur(12px)',
            transform: 'translateY(1.25rem)',
          },
          to: {
            opacity: 1,
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
        heart: {
          '0%, 40%, 80%, 100%': {
            transform: 'scale(1)',
          },
          '20%, 60%': {
            transform: 'scale(1.15)',
          },
        },
      },
    },
  },
  plugins: [],
};
