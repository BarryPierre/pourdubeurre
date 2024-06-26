import colors from "tailwindcss/colors"
import { createThemes } from "tw-colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,css,ts}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    fontFamily: {
      body: ["REM", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          ...({
            '50': '#c4902a',
            '100': '#c4902a',
            '200': '#c4902a',
            '300': '#c4902a',
            '400': '#c4902a',
            '500': '#c4902a',
            '600': '#c4902a',
            '700': '#c4902a',
            '800': '#c4902a',
            '900': '#c4902a',
            '950': '#c4902a'
          }),
          DEFAULT: '#c4902a',
        },
      },

      zIndex: {
        60: "60",
        70: "70",
      },

      keyframes: {
        load: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },

  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    createThemes(
      {
        light: {
          default: colors.zinc,
        },

        dark: {
          default: {
            50: "#09090b",
            100: "#18181b",
            200: "#27272a",
            300: "#3f3f46",
            400: "#52525b",
            500: "#71717a",
            600: "#a1a1aa",
            700: "#d4d4d8",
            800: "#e4e4e7",
            900: "#f4f4f5",
            950: "#fafafa",
          },
        },
      },
      {
        defaultTheme: "light",
      },
    ),
  ],
}

