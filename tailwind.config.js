// tailwind.config.js
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './node_modules/preline/**/*.js'
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
          500: '#D81B60',  // Brand Magenta
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
