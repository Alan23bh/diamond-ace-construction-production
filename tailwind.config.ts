import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#11100E",
          900: "#171511",
          800: "#211F1A",
        },
        warm: {
          white: "#F6F1E8",
          muted: "#BBB2A3",
        },
        stone: "#8F887C",
        beige: "#D8CBB8",
        brass: {
          DEFAULT: "#B8965A",
          dark: "#9F7F47",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
