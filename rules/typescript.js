module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/no-use-before-define': ['warn'], // fixes https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    },
};
