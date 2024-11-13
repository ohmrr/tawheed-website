import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        arabic: ['Amiri', 'serif']
      }
    }
  },

  plugins: []
} satisfies Config;
