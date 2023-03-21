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
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideIn: {
          from: { translate: "calc(100% + var(--viewport-padding))" },
          to: { translate: "0" },
        },
        swipeOut: {
          from: { translate: "var(--radix-toast-swipe-end-x)" },
          to: { translate: "calc(100% + var(--viewport-padding))" },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideIn: "slideIn 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 200ms ease-out",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
