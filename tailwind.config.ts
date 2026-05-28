import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.18)",
        soft: "0 10px 30px rgba(0,0,0,0.12)"
      },
      colors: {
        ivory: "#fff9ef",
        gold: "#d4af37",
        maroon: "#6e1f2d",
        sandal: "#e7d3b4",
        blush: "#f7d8d6",
        ink: "#21151b"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.9" },
          "50%": { transform: "translateY(-18px) rotate(6deg)", opacity: "1" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(0deg)", opacity: "0" },
          "15%": { opacity: "1" },
          "100%": { transform: "translate3d(0, -110vh, 0) rotate(360deg)", opacity: "0" }
        }
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        drift: "drift 14s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
