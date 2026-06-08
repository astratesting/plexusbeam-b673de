/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        coral: "#FB7185",
        honey: "#F59E0B",
        offwhite: "#FFF8F0",
        ink: "#1F1B2E",
        mist: "#EFE9FF",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "lattice-drift": "lattice-drift 12s ease-in-out infinite",
      },
      keyframes: {
        "lattice-drift": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      scrollMargin: {
        "16": "4rem",
      },
    },
  },
  plugins: [],
};
