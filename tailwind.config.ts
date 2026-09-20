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
        page: "var(--color-page)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        "ink-muted": "var(--color-ink-muted)",
        accent: {
          DEFAULT: "var(--color-accent)",
          dark: "var(--color-accent-dark)",
          soft: "var(--color-accent-soft)",
        },
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
          DEFAULT: "#B8914F",
          dark: "#98733B",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 23, 21, 0.08)",
        card: "0 12px 32px rgba(23, 23, 21, 0.06)",
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
