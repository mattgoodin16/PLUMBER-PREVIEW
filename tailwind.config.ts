import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxeNavy: "#020617",
        luxeNavySoft: "#020824",
        luxeInk: "#050816",
        luxeGold: "#f5d37a",
        luxeGoldSoft: "#f7e2a8",
        luxeIvory: "#f9fafb",
        luxeMuted: "#9ca3af"
      },
      boxShadow: {
        luxeSoft: "0 24px 60px rgba(15, 23, 42, 0.65)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
