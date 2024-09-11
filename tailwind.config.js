/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "brand-purple": "#462E84",
        "brand-blue": "#2A2477",
        "theme-purple": "#041139",
        "gray-f2": "#f2f2f2",
        bg: "#F7FAFA",
        "warning-light": "#faedbd",
        "success-light": "#17C96433",
        "danger-light": "#FEE3E2",
        "default-light": "#E5E6E8",
        "secondary-light": "#EDEAF3",
      },
      // change the font size of the headings as per your need
      fontSize: {
        "heading-clamp": "clamp(1.2rem, 6vw, 50.10px)",
        "md-heading-clamp": "clamp(1.2rem, 6vw, 45.10px)",
        "large-heading-clamp": "clamp(1rem, 9vw, 58.10px)",
        "card-title-clamp": "clamp(1rem, 5vw, 37px)",
        "small-heading-clamp": "clamp(1rem,3vw, 17px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
