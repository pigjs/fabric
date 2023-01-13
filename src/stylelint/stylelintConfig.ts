/**
 * @title stylelint
 * @description stylelint 相关规则配置
 */
export default {
    extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-prettier'],
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    rules: {
        'no-descending-specificity': null,
        'function-url-quotes': 'always',
        'selector-attribute-quotes': 'always',
        'font-family-no-missing-generic-family-keyword': null, // iconfont
        'plugin/declaration-block-no-ignored-properties': true,
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        'selector-type-no-unknown': null,
        'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
        'no-duplicate-selectors': null // 不校验重复的选择器
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
};
