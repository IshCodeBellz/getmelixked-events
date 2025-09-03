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
        brand: {
          // Primary accent (buttons, highlights)
          DEFAULT: "#F7C6C6", // blush
          50: "#FFF6F6",
          100: "#FFEDED",
          200: "#FCDDDD",
          300: "#F7C6C6",
          400: "#F0A9A9",
          500: "#E88888",
          600: "#D46262",
          700: "#B44444",
          800: "#8F3434",
          900: "#6E2A2A",
        },

        // Background / surfaces (dark terracotta-brown stack)
        surface: {
          50: "#2A2323",
          100: "#352A2A", // cocoa
          200: "#4A3A3A",
          300: "#5F4D4D", // clove
          400: "#7B6767",
          500: "#9A8686",
        },

        // Text (near-black stack)
        ink: {
          DEFAULT: "#0A0A0B", // graphite
          soft: "#191515", // pitch (subhead/body on dark)
        },

        // Convenience aliases (use if you prefer)
        cocoa: "#352A2A",
        clove: "#5F4D4D",
        graphite: "#0A0A0B",
        pitch: "#191515",
        blush: "#F7C6C6",
      },

      // Buttons/cards rounded look (like your comps)
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },

      // Subtle shadows that read on dark surfaces
      boxShadow: {
        brand: "0 10px 24px -12px rgba(0,0,0,0.4)",
        soft: "0 6px 16px -8px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        logo: "url('./public/logo.PNG')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
