const config = {
    theme: {
        fontFamily: {
            sans: [ "Quicksand", "sans-serif" ]
        },
        extend: {
            colors: {
                nuxt: {
                    light: "#41B883",
                    DEFAULT: "#3B8070",
                    dark: "#35495E"
                },
                primary: {
                    light: "#86D5B1",
                    DEFAULT: "#41B883",
                    dark: "#35976B"
                },
                secondary: {
                    light: "#507091",
                    DEFAULT: "#34495E",
                    dark: "#243342"
                },
                accent: {
                    light: "#F7CACA", // or #FFEEC2
                    DEFAULT: "#EF9A9A", // or #FFDE88
                    dark: "#E66060" // or #FFC533
                }
            }
        }
    }
};

export default config;
