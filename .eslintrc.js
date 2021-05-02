module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        // 'plugin:prettier/recommended',
        "plugin:nuxt/recommended"
    ],
    plugins: [],
    rules: {
        semi: [ "warn", "always" ],
        quotes: [ "warn", "double", { allowTemplateLiterals: true } ],
        "max-len": [
            "warn",
            {
                code: 180,
                tabWidth: 4,
                ignoreUrls: true
            }
        ],
        indent: [
            "warn",
            4,
            {
                SwitchCase: 1
            }
        ],
        "vue/max-attributes-per-line": [
            "warn",
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: true
                }
            }
        ],
        "vue/html-closing-bracket-newline": [
            "warn", {
                singleline: "never",
                multiline: "never"
            }
        ],
        "template-tag-spacing": "warn",
        "vue/singleline-html-element-content-newline": [ "warn", {
            ignoreWhenNoAttributes: false,
            ignoreWhenEmpty: true,
            ignores: [ "pre", "textarea" ]
        } ],
        "vue/multiline-html-element-content-newline": "warn",
        "array-bracket-spacing": [ "warn", "always" ],
        "vue/array-bracket-spacing": [ "warn", "always" ],
        "template-curly-spacing": [ "warn", "never" ],
        "comma-spacing": [
            "warn",
            {
                before: false,
                after: true
            }
        ],
        "switch-colon-spacing": [ "warn" ],
        "object-curly-spacing": [ "warn", "always" ]
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
};
