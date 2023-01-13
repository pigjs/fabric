import { tsEslintRules } from './tsEslintConfig'

export default {
    extends: ['eslint:recommended','plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    rules: tsEslintRules,
    settings: {
        // support import modules from TypeScript files in JavaScript files
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.d.ts']
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
        },
        'import/extensions': ['.ts', '.tsx', '.d.ts'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
    }
}