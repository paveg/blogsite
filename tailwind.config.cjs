/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['public/**/*.html', './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      noto: ['Noto Sans JP', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
