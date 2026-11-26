import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hex literais (permitem modificadores de opacidade, ex.: bg-bg/90).
        // Devem espelhar os tokens em app/globals.css.
        bg: "#09090a",
        surface: "#111113",
        "surface-2": "#19191c",
        line: "rgba(255,255,255,0.09)",
        ink: "#f4f4f1",
        muted: "#a3a3a8",
        brand: {
          yellow: "#ffc400",
          red: "#d61f2c",
          "red-dark": "#a8141f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "76rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 38s linear infinite",
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
