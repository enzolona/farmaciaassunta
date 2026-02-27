/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
        secondary: "#10b981",
        accent: "#1e293b",
        light: "#f8fafc",
        success: "#059669",
        warning: "#f59e0b",
      },
    },
  },
  plugins: [],
}
