/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js';

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    'public/**/*.{astro,html}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      noto: ['Noto Sans JP', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [preline],
};
