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
        BrinkPink: {
          50: "#ffeef2",
          100: "#ffccd6",
          200: "#ffb3c2",
          300: "#ff90a7",
          400: "#ff7a95",
          500: "#ff597b",
          600: "#e85170",
          700: "#b53f57",
          800: "#8c3144",
          900: "#6b2534",
        },
        AuroMetalSaurus: {
          50: "#f0f1f3",
          100: "#d0d3d9",
          200: "#b9bdc7",
          300: "#989fad",
          400: "#858d9d",
          500: "#667085",
          600: "#5d6679",
          700: "#48505e",
          800: "#383e49",
          900: "#2b2f38",
        },
        Crayola: {
          50: "#e8f7f0",
          100: "#b7e7d1",
          200: "#94dcba",
          300: "#64cb9b",
          400: "#45c188",
          500: "#17b26a",
          600: "#15a260",
          700: "#107e4b",
          800: "#0d623a",
          900: "#0a4b2d",
        },
        CarminePink: {
          50: "#feeceb",
          100: "#fac5c1",
          200: "#f8a9a3",
          300: "#f5827a",
          400: "#f36960",
          500: "#f04438",
          600: "#da3e33",
          700: "#aa3028",
          800: "#84251f",
          900: "#651d18",
        },
        Gradient1: {
          50: "#FF597B",
          100: "#F5827A",
        },
        Gradient2: {
          50: "#F36960",
          100: "#E85170",
        },
        GradientHover: {
          50: "#FF597B",
          100: "#F04438",
        },
        Gradient4: {
          50: "#FF597B",
          100: "#E85170",
        },
        Uninteresting: {
          50: "#F04438",
          100: "#DA3E33",
        },
        interesting: {
          50: "#17B26A",
          100: "#45C188",
        },
        Fire: {
          50: "#2E90FA",
          100: "#155EEF",
        },
      },
    },
    // screens: {
    //   smx: { max: "930px" }, // Small screens (up to 767px)
    //   mdx: { max: "1025px" }, // Medium screens (up to 1023px)
    //   lgx: { max: "1290px" }, // Large screens (up to 1279px)
    //   smmxs: { max: "500px" }, //Screens for up to 400px
    //   smxx: { max: "300px" }, // Screen for Galaxy Fold
    // },
  },
  plugins: [],
};
export default config;
