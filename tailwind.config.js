/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#015da8",
        secondary: "#6ba8da",
        accent: "#2c3e50",
        light: "#f8f9fa",
      },
    },
  },
  plugins: [],
}
