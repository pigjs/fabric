import fs from 'fs'
import path from 'path'

import {eslintRules} from './eslintConfig'
import {tsEslintRules} from './tsEslintConfig'
import {reactEslintRules} from './reactEslintConfig'

const isTypeAwareEnabled = process.env.DISABLE_TYPE_AWARE === undefined;

const parserOptions = {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    requireConfigFile: false,
    project: isTypeAwareEnabled ? './tsconfig.json' : undefined,
};

const isJsMoreTs = async (path = 'src') => {
    const fg = require('fast-glob');
    const jsFiles = await fg(`${path}/src/**/*.{js,jsx}`, { deep: 3 });
    const tsFiles = await fg(`${path}/src/**/*.{ts,tsx}`, { deep: 3 });
    return jsFiles.length > tsFiles.length;
  };
  
const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));

if (isTsProject) {
    try {
        isJsMoreTs(process.cwd()).then((jsMoreTs) => {
        if (!jsMoreTs) return;
        console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json');
        });
    } catch (e) {
        console.log(e);
    }
}

/**
 * @title eslint
 * @description eslint 相关规则配置
 * 0-不提示(off) 1-警告(warn) 2-抛出错误(error)
 */
export default {
    extends: ['eslint:recommended','plugin:react/recommended','plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    plugins: ['jest', 'unicorn', 'import','react', 'react-hooks'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    rules: {
        ...eslintRules,
        /** react 相关规则 */
        ...reactEslintRules,
        /** prettier */
        'prettier/prettier': 'warn' // prettier 规则
    },
    settings: {
        // support import modules from TypeScript files in JavaScript files
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
        },
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
        react: {
            version: 'detect'
        }
    },
    overrides: isTypeAwareEnabled ? [
        {
            files: ['**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            rules: {
                ...eslintRules,
                ...reactEslintRules,
                ...tsEslintRules
            },
            extends: ['eslint:recommended','plugin:react/recommended','plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended']
        }
    ]: [],
    parserOptions
};
