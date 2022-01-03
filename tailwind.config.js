module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      1: "1rem",
    },
    extend: {
      backgroundImage: {
        down: "url('/img/down.svg')",
      },
      colors: {
        primaryGray: {
          100: "#121212",
        },
        hoverGray: {
          100: "#383838",
        },
        secondaryGray: {
          100: "#252525",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
