/**
 * @title stylelint
 * @description stylelint 相关规则配置
 */
export default {
    // 继承官方规则库，css-modules 和 prettier 规则
    extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-prettier'],
    // 引入插件
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    // 自定义规则
    rules: {
        // 不校验特定性下降
        'no-descending-specificity': null,
        // url 中的引号必须存在
        'function-url-quotes': 'always',
        // 属性选择器中的引号必须存在
        'selector-attribute-quotes': 'always',
        // 允许缺少通用字体系列关键字，如 iconfont
        'font-family-no-missing-generic-family-keyword': null,
        // 自定义插件，阻止声明块中的被忽略属性
        'plugin/declaration-block-no-ignored-properties': true,
        // 忽略未知的单位，只校验 rpx
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        // 忽略未知的选择器类型
        'selector-type-no-unknown': null,
        // 属性值小写
        'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
        // 不校验重复的选择器
        'no-duplicate-selectors': null,
        // 忽略未知的属性
        'property-no-unknown': null
    },
    // 忽略检查的文件
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
};
