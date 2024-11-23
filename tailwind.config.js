/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      backgroundImage: {
        linearColor: 'linear-gradient(90deg, #772AB3 0%, #C753FE 100%)',
      },
      colors: {
        primary: "#772ab3",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
        
      fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

