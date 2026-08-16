/** Classical design-system tokens, expressed as Tailwind theme values. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f3f2f2',
        surface: '#eae9e9',
        ink: '#201f1d',
        divider: 'rgba(32,31,29,0.16)',
        accent: {
          DEFAULT: '#b68235',
          100: '#fff3e4', 200: '#ffe3bf', 300: '#facb8d', 400: '#e1ad66',
          500: '#c28d41', 600: '#a06f24', 700: '#7d5411', 800: '#5a3b0a', 900: '#3a270d',
        },
        brand: { orange: '#e8622a' },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Lora', 'serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(45,43,43,0.14)',
        md: '0 3px 10px rgba(45,43,43,0.16)',
        lg: '0 12px 32px rgba(45,43,43,0.22)',
      },
      keyframes: {
        spin360: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        spinRev: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(-360deg)' } },
        breathe: { '0%,100%': { opacity: '.25' }, '50%': { opacity: '.7' } },
        drift: {
          '0%,100%': { transform: 'rotateY(-13deg) rotateX(6deg)' },
          '50%': { transform: 'rotateY(13deg) rotateX(-4deg)' },
        },
        glow: { '0%,100%': { opacity: '.55', transform: 'scale(.94)' }, '50%': { opacity: '.95', transform: 'scale(1.08)' } },
        glowB: {
          '0%,100%': { opacity: '.8', transform: 'translate3d(-8%,6%,0) scale(1)' },
          '50%': { opacity: '.45', transform: 'translate3d(10%,-6%,0) scale(1.16)' },
        },
      },
      animation: {
        spin360: 'spin360 var(--dur,30s) linear infinite',
        spinRev: 'spinRev var(--dur,120s) linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        drift: 'drift 20s ease-in-out infinite',
        glow: 'glow 11s ease-in-out infinite',
        glowB: 'glowB 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
