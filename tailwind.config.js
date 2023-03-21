const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-interstate)", ...fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "hsl(var(--color-black) / <alpha-value>)",
        white: "hsl(var(--color-white) / <alpha-value>)",
        antique: {
          50: "hsl(var(--color-antique-50) / <alpha-value>)",
          100: "hsl(var(--color-antique-100) / <alpha-value>)",
          200: "hsl(var(--color-antique-200) / <alpha-value>)",
          300: "hsl(var(--color-antique-300) / <alpha-value>)",
          400: "hsl(var(--color-antique-400) / <alpha-value>)",
          500: "hsl(var(--color-antique-500) / <alpha-value>)",
          600: "hsl(var(--color-antique-600) / <alpha-value>)",
          700: "hsl(var(--color-antique-700) / <alpha-value>)",
          800: "hsl(var(--color-antique-800) / <alpha-value>)",
          900: "hsl(var(--color-antique-900) / <alpha-value>)",
          950: "hsl(var(--color-antique-950) / <alpha-value>)",
        },
        green: {
          50: "hsl(var(--color-green-50) / <alpha-value>)",
          100: "hsl(var(--color-green-100) / <alpha-value>)",
          200: "hsl(var(--color-green-200) / <alpha-value>)",
          300: "hsl(var(--color-green-300) / <alpha-value>)",
          400: "hsl(var(--color-green-400) / <alpha-value>)",
          500: "hsl(var(--color-green-500) / <alpha-value>)",
          600: "hsl(var(--color-green-600) / <alpha-value>)",
          700: "hsl(var(--color-green-700) / <alpha-value>)",
          800: "hsl(var(--color-green-800) / <alpha-value>)",
          900: "hsl(var(--color-green-900) / <alpha-value>)",
          950: "hsl(var(--color-green-950) / <alpha-value>)",
        },
      },
      spacing: {
        nav: "var(--height-nav)",
        screen: "var(--height-screen, 100vh)",
      },
      height: {
        screen: "var(--height-screen, 100vh)",
        "screen-no-nav":
          "calc(var(--height-screen, 100vh) - var(--height-nav))",
      },
      minHeight: {
        screen: "var(--height-screen, 100vh)",
        "screen-no-nav":
          "calc(var(--height-screen, 100vh) - var(--height-nav))",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
