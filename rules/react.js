module.exports = {
    extends: ['prettier/react'],
    plugins: ['react-hooks'],
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        'react/display-name': 1,
        'react/forbid-prop-types': 0,
        // Make compatible with Typescript and only allow .js and .ts as opposed to `.$sx`
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'react/no-array-index-key': 0,
        'react/no-unescaped-entities': 0,
        'react/prefer-stateless-function': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,

        // React Hooks Rules
        'react-hooks/exhaustive-deps': 'warn',
    },
};
