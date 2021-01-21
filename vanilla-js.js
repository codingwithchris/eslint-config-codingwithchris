module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/base',
        './rules/import',
        './rules/json',
        './rules/prettier',
    ].map(require.resolve),

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },

    env: {
        browser: true,
        node: true,
        jest: true,
    },

    plugins: [],

    rules: {},
};
