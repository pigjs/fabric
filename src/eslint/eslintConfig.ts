// https://eslint.bootcss.com/docs/rules/
export const eslintRules = {
    strict: ['error', 'never'], // 要求或禁止使用严格模式指令
        'unicode-bom': 'off', // 要求或禁止 Unicode BOM
        indent: ['warn', 4, { SwitchCase: 1 }], // 缩进风格，4个空格
        'linebreak-style': ['off', 'windows'], // 关闭换行风格
        'eol-last': ['warn', 'always'], // 文件末尾强制换行
        'max-len': ['warn', 120], // 长度1-120
        semi: ['warn', 'always'], // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
        curly: ['warn', 'all'], // 强制所有控制语句使用一致的括号风格
        'no-loop-func': 'warn', // 禁止在循环中出现 function 声明和表达式
        radix: 'warn', // 强制在parseInt()使用基数参数
        quotes: ['warn', 'single', 'avoid-escape'], // 强制使用一致的反勾号、双引号或单引号
        'no-multi-str': 'warn', // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
        'no-new-wrappers': 'warn', // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new-object': 'warn', // 禁止使用 Object 的构造函数
        'no-new-func': 'warn', // 禁止对 Function 对象使用 new 操作符
        'no-array-constructor': 'warn', // 禁止使用 Array 构造函数
        'guard-for-in': 'warn', // 要求 for-in 循环中有一个 if 语句
        'no-prototype-builtins': 'warn', // 禁止直接使用 Object.prototypes 的内置属性
        'no-extend-native': 'warn', // 禁止扩展原生类型
        'no-proto': 'warn', // 禁用 __proto__ 属性
        'no-eval': 'warn', // 禁用 eval()
        'no-with': 'warn', // 禁用 with 语句
        'no-iterator': 'warn', // 禁用 __iterator__ 属性
        'no-restricted-syntax': 'warn', // 禁用特定的语法
        'no-undef': 'warn', // 禁用未声明的变量，除非它们在 /* global */ 注释中被提到
        'no-dupe-class-members': 'error', // 禁止类成员中出现重复的名称
        'no-unused-vars': 'warn', // 禁止出现未使用过的变量
        eqeqeq: 'warn', // 要求使用 === 和 !==
        'wrap-iife': 'warn', // 要求 IIFE 使用括号括起来
        'prefer-destructuring': 'warn', // 优先使用数组和对象解构
        'no-useless-escape': 'off', // 覆盖eslint:recommended中的规则，避免过多的不合理检查结果
        'comma-dangle': 'warn', // 要求对象或数组成员的最后不能添加逗号
        'space-infix-ops': ['warn', { int32Hint: true }], // 中间的运算符左右要添加空格
        'block-spacing': ['warn', 'always'], // 单行内间距一致，增加代码可读性
        'space-before-blocks': ['warn', 'always'], // 不是单独一行的{}前添加空格，增加代码可读性
        'keyword-spacing': ['warn', { before: true, after: true }], // 关键字左右添加空格，增加代码可读性
        'spaced-comment': ['warn', 'always'], // 注释符号和注释内容直接添加一个空格
        'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1, maxBOF: 0 }], // 文档中连续空行不得超过2行，文件开头不能有空行，文件结尾最多一个空行
        'padded-blocks': ['warn', 'never'], // 在代码块内开始和结束无需添加空格，使代码更简洁
        'jsx-quotes': ['warn', 'prefer-single'], // jsx属性推荐使用单引号，与全局规则统一
        'arrow-spacing': ['warn', { before: true, after: true }], // 箭头符号前后要有空格，增加代码可读性
        'no-confusing-arrow': ['warn', { allowParens: true }], // 箭头函数不能与条件表达式混用，容易造成代码意图不明确，不便于维护
        'no-useless-constructor': 'warn', // 不需要编写无用的构造方法
        'generator-star-spacing': ['warn', 'both'], // 使用构造器函数时，* 号左右添加空格，增强代码可读性
        'no-duplicate-imports': ['error', { includeExports: true }], // 避免模块重复引入和导出
        'import/imports-first': 'warn', // 将所有 import 语句放在文件最前方
        'import/no-webpack-loader-syntax': 'error', // 在模块 import 声明中禁止使用 Webpack 的 loader 语法
        'no-useless-computed-key': 'warn', // 避免使用无必要的计算属性key
        'no-useless-rename': 'error', // 避免无必要的重命名
        'no-var': 'warn', // 建议逐渐使用let和const替代var声明变量和常量
        'object-shorthand': 'warn', // object属性声明尽量简洁明了，能简化的代码推荐使用简写
        'prefer-arrow-callback': 'warn', // 建议回调函数尽量使用箭头函数声明
        'prefer-const': 'warn', // 声明后不做改变的变量尽量使用const声明为常量
        'prefer-spread': 'warn', // 建议使用Spread特性替换只为传递数组参数时调用apply
        'prefer-template': 'warn', // 建议使用template替代字符串拼接
        'no-const-assign': 'error', // 禁止修改 const 声明的变量
        'rest-spread-spacing': 'warn', // rest和spread符号后不要添加空格
        'symbol-description': 'warn', // 在创建Symbol类型时要添加描述
        'template-curly-spacing': ['error', 'never'], // template摸板中${符号后和}符号前不添加空格
        'yield-star-spacing': ['error', 'both'], // yield表达式 * 号左右添加空格
        'no-multi-spaces': 'warn', // 禁止使用多个空格
        'no-use-before-define': ['warn', { functions: false, classes: false }], // 不允许在变量定义之前使用它们
        'no-async-promise-executor': 'warn', // 禁止使用异步函数作为 Promise executor
        'no-case-declarations': 'warn', // 不允许在 case 子句中使用词法声明
        'no-empty': 'warn', // 禁止空块语句
        'no-mixed-spaces-and-tabs': 'warn', // 禁止使用 空格 和 tab 混合缩进
        'function-paren-newline': 'off', // 强制在函数括号内使用一致的换行
        'sort-imports': 'off', // 强制模块内的 import 排序
        'class-methods-use-this': 'off', // 强制类方法使用 this
        'unicorn/prevent-abbreviations': 'off',
        /** 与 prettier 冲突 */
        'arrow-body-style': 'off', // 要求箭头函数体使用大括号
        'arrow-parens': 'off', // 要求箭头函数的参数使用圆括号
        'object-curly-newline': 'off', // 强制大括号内换行符的一致性
        'implicit-arrow-linebreak': 'off', // 强制隐式返回的箭头函数体的位置
        'operator-linebreak': 'off', // 运算符在换行时放在下一行的开始
        'no-param-reassign': 'warn', // 禁止对 function 的参数进行重新赋值
        'space-before-function-paren': 'off', // 方法括号前统一加空格，增加代码可读性
}