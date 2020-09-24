module.exports = {
    extends: ['plugin:jsx-a11y/recommended'],
    plugins: ['jsx-a11y'],
    rules: {
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref'],
            },
        ],
    },
};
