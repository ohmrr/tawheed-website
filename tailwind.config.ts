import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        arabic: ['Amiri', 'serif']
      },
      colors: {
        azure: '#24418C',
        'azure-dark': '#1A347A',
        jade: '#22A34A',
        'jade-dark': '#1A8A3A',
        charcoal: '#131313'
      }
    }
  },

  plugins: []
} satisfies Config;
