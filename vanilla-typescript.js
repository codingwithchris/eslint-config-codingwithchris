module.exports = {
    extends: [
        'eslint-config-airbnb-typescript',
        './rules/base',
        './rules/import',
        './rules/typescript',
        './rules/prettier',
    ].map(require.resolve),

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module" // Allows for the use of imports
    },

    env: {
        browser: true,
        node: true,
        jest: true,
    },

    plugins: [],

    rules: {},
};
