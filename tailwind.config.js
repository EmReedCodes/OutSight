const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inclusive Sans"', ...defaultTheme.fontFamily.sans] // Default font
    },
    extend: {
      colors: {
        "primary-black": colors.slate[900],
        "secondary-black": colors.slate[600]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.sans"),
            h1: { fontFamily: theme("fontFamily.sans") },
            h2: { fontFamily: theme("fontFamily.sans") },
            p: { fontFamily: theme("fontFamily.sans") }
          }
        }
      })
    }
  },
  plugins: [typography]
};
