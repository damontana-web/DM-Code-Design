// tailwind.config.js
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './node_modules/preline/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#4BA5F5',  // Lighter shade
          500: '#1B91F2',  // Primary brand color
          600: '#2A3A8F',  // Darker shade for hover states
        },
        navy: { 500: '#1e3a8a' },
      },
    },
  },
  plugins: [forms],
};
