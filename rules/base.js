module.exports = {
    plugins: ['html'],
    rules: {
        'arrow-body-style': [2, 'as-needed'],
        'comma-dangle': 0,
        'consistent-return': 0,
        'func-names': 0,
        'max-len': [
            'error',
            {
                code: 140,
                ignoreUrls: true,
                ignoreTrailingComments: true,
            },
        ],
        'no-alert': 0,
        'no-await-in-loop': 0,
        'no-console': 0,
        'no-debugger': 0,
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-syntax': [
            2,
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-tabs': 0,
        'no-unused-vars': [
            1,
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: 'res|next|^err',
            },
        ],
        'no-unused-expressions': [
            2,
            {
                allowTaggedTemplates: true,
            },
        ],
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'no-underscore-dangle': 0,
        'no-use-before-define': 0, // fixes https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
        'no-shadow': [
            2,
            {
                hoist: 'all',
                allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        radix: 0,
        'space-before-function-paren': 0,
    },
};
