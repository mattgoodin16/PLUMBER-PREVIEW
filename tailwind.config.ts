import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#003b73",
        brandLightBlue: "#00a9ff",
        brandGold: "#fbbf24",
        bgDark: "#020617"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
