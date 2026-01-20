// tailwind.config.js
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './node_modules/preline/**/*.js'
  ],
  safelist: [
    'bg-magenta-500/[0.1]',
    'bg-magenta-500/[0.2]',
    'bg-blue-primary/[0.1]',
    'bg-blue-primary/[0.2]',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          400: '#4BA5F5',  // Lighter shade
          500: '#1B91F2',  // Primary brand color
          600: '#2A3A8F',  // Darker shade for hover states
        },
        magenta: {
          200: '#f8b8d9',  // Light shade
          300: '#f38cc7',  // Lighter shade
          400: '#EA2295',  // Primary magenta (replaces orange-400)
          500: '#EA2295',  // Primary magenta (replaces orange-500)
          600: '#c41d7a',  // Darker shade
        },
        blue: {
          primary: '#1A468E',  // Brand Blue
        },
        'blue-primary': '#1A468E',  // For pill highlights
        navy: { 500: '#1e3a8a' },
        orange: {
          400: '#D81B60',  // Updated to magenta
        },
      },
    },
  },
  plugins: [forms],
};
