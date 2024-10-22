/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dustyPinky: "#f6c7c7",
        dustyBlack: "#141414",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        logo: "url('./public/logo.PNG')",
      },
    },
  },
  plugins: [],
};
