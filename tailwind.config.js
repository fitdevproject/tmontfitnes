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
    //   @keyframes bounce {
    //     0%, 100% {
    //         transform: translateY(-25%);
    //         animation-timing-function: cubic-bezier(0.8,0,1,1);
    //     }
    //     50% {
    //         transform: none;
    //         animation-timing-function: cubic-bezier(0,0,0.2,1);
    //     }
    // }
    // .animate-bounce {
    //     animation: bounce 1s infinite;
    // }
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
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 3s ease-out",
        "fade-out-down": "fade-out-down 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-out-up": "fade-out-up 1s ease-out",
        wiggle: "wiggle 2s ease-in-out",
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
