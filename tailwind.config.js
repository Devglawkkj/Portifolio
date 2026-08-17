/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#e8e3dc',
          100: '#cbc4bb',
          200: '#a79e94',
          300: '#7f766e',
          400: '#5f5751',
          500: '#47413c',
          600: '#342f2c',
          700: '#282320',
          800: '#1d1917',
          900: '#141110',
          950: '#0b0908',
        },
        beige: {
          50: '#fffaf0',
          100: '#f7ecd9',
          200: '#ead8bc',
          300: '#d8bd96',
          400: '#c39d6f',
          500: '#aa7f50',
          600: '#89633f',
          700: '#684a33',
          800: '#493326',
          900: '#30221b',
          950: '#1d1511',
        },
        red: {
          50: '#fff1ee',
          100: '#ffe0da',
          200: '#ffc2b6',
          300: '#f99a88',
          400: '#ef6d58',
          500: '#df4432',
          600: '#c52f23',
          700: '#9f241d',
          800: '#7f211d',
          900: '#681f1c',
          950: '#380d0b',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
      },
      // Custom animations for AI aesthetic
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(0px)' },
          '50%': { opacity: '0.8', filter: 'blur(2px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-mesh':
          'linear-gradient(135deg, #0b0908 0%, #141110 25%, #1d1917 50%, #141110 75%, #0b0908 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};
