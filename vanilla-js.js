module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/base',
        './rules/import',
        './rules/prettier',
    ].map(require.resolve),

    parser: 'babel-eslint',

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
