import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config2 = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

const config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ebony: "#121926",
        primary: "#0091F0",
        primaryDark: "#0061a0",
        zarcon: "#F1F9FF",
        "gray-m-800": "#202939",
        lightBrown: "#CCB48A",
        "gray-m-900": "#121926",
        "gray-m-100": "#EEF2F6",
        charcoal: "#05111A",
        nebula: "#D0D5DD",
        smokeyGray: "#737373",
        "gray-m-200": "#E3E8EF",
        quilGrey: "#D9D9D9",
        "gray-m-500": "#697586",
        "gray-m-50": "#F8FAFC",
        "gray-m-700": "#364152",
        raven: "#6E767D",
        "gray-m-300": "#CDD5DF",
        primaryLight: "#80c8f8",
        fb: "#1877F2",
        tele: "#0088cc",
        insta: "#FCAF45",
        linkedin: "#0077b5",
        s1: "#121212",
        s2: "#282828",
        s3: "#3f3f3f",
        s4: "#575757",
        s5: "#717171",
        s6: "#8b8b8b",
      },
      backgroundImage: {
        bgBanner: "url(/images/Banner.png)",
        distriBanner: "url(/images/distriBanner.png)",
        participate: "url(/images/participate.png)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      container: {
        screens: {
          "2xl": "1320px",
          xl: "1140px",
          lg: "960px",
        },
      },
      boxShadow: {
        cardShadow: "0px 1px 2px rgba(16, 24, 40, 0.06);",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      const newUtilities = {
        ".animation-paused": {
          "animation-play-state": "paused",
        },
      };

      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
