/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/table.js",
  ],
  theme: {
    extend: {},
  },

  plugins: [nextui()],
};
