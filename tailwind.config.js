const plugin = require("tailwindcss/plugin");

const config = {
    theme: {
        fontFamily: {
            sans: [ "Quicksand", "sans-serif" ]
        },
        extend: {
            colors: {
                primary: "#41B883",
                secondary: "#34495E",
                accent: "#EF9A9A" // or #FFDE88
            }
        }
    },
    plugins: [
        plugin(({
            addComponents,
            theme
        }) => {
            // Buttons
            const buttonBaseStyle = {
                color: theme("colors.white"),
                padding: theme("spacing.4"),
                borderRadius: theme("borderRadius.3xl")
            };
            const buttons = {
                ".btn-primary": {
                    backgroundColor: theme("colors.primary"),
                    ...buttonBaseStyle
                },
                ".btn-secondary": {
                    backgroundColor: theme("colors.secondary"),
                    ...buttonBaseStyle
                },
                ".btn-accent": {
                    backgroundColor: theme("colors.accent"),
                    ...buttonBaseStyle
                }
            };

            addComponents(buttons);
        })
    ]
};

export default config;
