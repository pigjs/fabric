import chalk from 'chalk';

export const delOriginalConfig = [
    {
        name: 'delOriginalConfig',
        message: 'fabric 初始化会删除原有的 eslint prettier stylelint husky 配置，是否继续？',
        require: true,
        type: 'list',
        default: 'no',
        choices: [
            { value: 'yes', name: '是' },
            { value: 'no', name: '否' }
        ]
    }
];

export const originalConfigFiles = [
    '.husky',
    '.eslintignore',
    '.eslintrc.js',
    '.eslintrc',
    '.prettierignore',
    '.prettierrc.js',
    'prettier.config.js',
    '.stylelintignore',
    '.prettierrc',
    '.stylelintrc.js'
];

export const lintStaged = {
    '*.{js,jsx,ts,tsx,less,css,md}': 'pretty-quick --staged',
    '*.{js,jsx,ts,tsx}': 'eslint --fix --quiet',
    '*.{css,less}': 'stylelint'
};

export const scripts = {
    prepare: 'npx husky install',
    'commit-msg': 'pig-fabric --hooks=commit-msg',
    'pre-commit': 'pig-fabric --hooks=pre-commit && lint-staged',
    'pre-merge-commit': 'pig-fabric --hooks=pre-merge-commit',
    lint: "eslint src --ext .js,.jsx,.ts,.tsx --quiet && stylelint 'src/**/*.{less,css}'",
    'lint-fix': "eslint src --ext .js,.jsx,.ts,.tsx --quiet --fix && stylelint 'src/**/*.{less,css}' --fix"
};

export const devDependencies = {
    'lint-staged': '13.0.3',
    'pretty-quick': '3.1.3',
    stylelint: '13.13.1',
    eslint: '7.32.0',
    husky: '8.0.2',
    prettier: '2.7.1'
};

export const copyFiles = [
    '.eslintrc.js',
    '.prettierrc.js',
    '.stylelintrc.js',
    '.eslintignore',
    '.prettierignore',
    '.stylelintignore'
];

export const huskyCopyFiles = ['commit-msg', 'pre-commit', 'pre-merge-commit'];

export const commitLogs = `
${chalk.green(`[branchName?]<type>[(scope)?]: <message>\n`)}
${chalk.green(`xxx feat(xxx模块): 添加了个很棒的功能`)}
${chalk.green(`feat(模块): 添加了个很棒的功能`)}
${chalk.green(`fix(模块): 修复了一些 bug`)}
${chalk.green(`docs(模块): 更新了一下文档`)}
${chalk.green(`UI(模块): 修改了一下样式`)}
${chalk.green(`chore(模块): 对脚手架做了些更改`)}
${chalk.green(
    `其他提交类型: refactor, perf, workflow, build, CI, typos, types, tests, wip, release, deps, revert, locale\n`
)}
${chalk.red(`See xxxx\n`)}
`;
