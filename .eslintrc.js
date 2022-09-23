// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
              'endOfLine': 'auto',
            }],
        'react/no-unescaped-entities': 0,
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': "off",
        'linebreak-style': 0,
    },
    settings: {
        "react": {
          "version": "detect"
        }
      }
};