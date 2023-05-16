/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{tsx,ts}",
    "*"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "01": "#000000",
          "02": "#FFFFFF",
          "03": "#c5c5c5"
        },
        black: "#000000",
        white: "#FFFFFF",
        "dark-grey": "#13141a",
        navy: "#0d0d12",
        red: "#880808",
        neutral: {
          "00": "#010101",
          "01": "#292931"
        },
        border: {
          dark: "#000000",
          light: "#e6e6e6"
        },
        "background-white": "#f8fbfc"
      },
      fontFamily: {
        "inter-black": "InterBlack",
        "inter-extraBold": "InterExtraBold",
        "inter-bold": "InterBold",
        "inter-extraLight": "InterExtraLight",
        "inter-light": "InterLight",
        "inter-medium": "InterMedium",
        "inter-thin": "InterThin",
        "inter-semiBold": "InterSemiBold",
        "inter-regular": "InterRegular, Helvetica, sans-serif",
        "minion-pro": "MinionPro, Helvetica, sans-serif"
      },
      fontSize: {
        // "2xl": "1.25rem",
        // "3xl": "1.75rem",
        // "4xl": "2.25rem",
        // "5xl": "2.5rem",
        // "6xl": "3.75rem",
        PFO: "5rem"
      },
      backgroundPosition: {
        "center-top": "center top"
      },
      backgroundSize: {
        "full": "100%"
      }
    }
  },
  plugins: []
}
