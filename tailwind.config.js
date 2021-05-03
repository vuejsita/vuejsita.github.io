const plugin = require("tailwindcss/plugin");

const config = {
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#41B883",
        },
        secondary: {
          DEFAULT: "#34495E",
        },
        accent: {
          DEFAULT: "#EF9A9A", // or #FFDE88
        }
      }
    }
  }
};

export default config;
