/**
 * @title prettier
 * @description prettier 相关规则配置
 */
export default {
    proseWrap: 'never', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    tabWidth: 4, // tab缩进大小,默认为2
    useTabs: false, // 使用tab缩进，默认false
    semi: true, // 使用分号, 默认true
    singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    jsxSingleQuote: true, // jsx中使用单引号
    printWidth: 120, // 指定一行长度 超过则换行
    trailingComma: 'none', // 行尾逗号,默认none,可选 none|es5|all
    organizeImportsSkipDestructiveCodeActions: true, // 跳过破坏性代码操作 例如（删除未使用的代码等）,
    endOfLine: 'auto', // 换行 保持原样（不同平台 mac/window 换行符不一致）
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json'
            }
        },
        {
            files: 'document.ejs',
            options: {
                parser: 'html'
            }
        }
    ],
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-two-style-order']
};
