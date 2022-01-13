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
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

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
        tmontGreen: {
          100: "#63B175",
        },
        tmontActiveTab: {
          100: "#4E9359",
        },
        tmontGray: {
          100: "#525E74",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
