import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        backgroundSecondary: "#121212",
        text: "#ffffff",
        textSecondary: "#e5e5e5",
        accent: "#8ecae6",
        accentHover: "#6fb8d6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
