
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E2F",
        accent: "#3B82F6",
        background: "#111827",
        text: "#F9FAFB"
      }
    }
  },
  plugins: []
}
