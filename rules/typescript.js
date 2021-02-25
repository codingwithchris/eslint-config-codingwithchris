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
        '@typescript-eslint/no-empty-interface': ['warn'], // warn about this but don't throw an error because we sometimes use empty interfaces as placeholders while scaffolding out functionality
    },
};
