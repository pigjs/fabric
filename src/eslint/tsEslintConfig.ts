const isTypeAwareEnabled = process.env.DISABLE_TYPE_AWARE === undefined;

// https://typescript-eslint.io/rules/
export const tsEslintRules = {
    // 'no-undef': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off', // 要求函数重载签名是连续的
    '@typescript-eslint/array-type': 'error', // 要求对数组一致使用T[]或Array<T>
    '@typescript-eslint/await-thenable': 'off', // 禁止等待不是Thenable的值
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止@ts-<指令>注释或要求指令后面有描述
    '@typescript-eslint/ban-tslint-comment': 'off', // Disallow // tslint:<rule-flag> comments
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off', // 为块强制一致的大括号样式
    '@typescript-eslint/class-literal-property-style': 'off', // 强制类的字面量以一致的样式公开
    // 'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off', // 要求或禁止尾随逗号
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'off', // 强制逗号前后的间距一致
    '@typescript-eslint/consistent-indexed-object-style': 'warn', // 要求或禁止Record类型
    '@typescript-eslint/consistent-type-assertions': 'off', // 强制使用一致的类型断言
    '@typescript-eslint/consistent-type-definitions': 'off', // 强制类型定义以一致地使用接口或类型
    '@typescript-eslint/consistent-type-imports': 'warn', // 强制使用一致的类型导入
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off', // 强制默认参数放在最后
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': isTypeAwareEnabled ? 'warn' : 'off', // 尽可能地使用点表示法
    '@typescript-eslint/explicit-function-return-type': 'off', // 要求函数和类方法上显式返回类型
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off', // 要求或禁止函数标识符及其调用之间有空格
    // indent: 'off',
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off', // 要求或禁止在变量声明中初始化
    // 'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'off', // 强制关键字前后的间距一致
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off', // 要求或禁止类成员之间有空行
    '@typescript-eslint/member-delimiter-style': 'off', // 要求接口和类型字面量使用特定的成员分隔符样式
    '@typescript-eslint/member-ordering': 'off', // 要求一致的成员声明顺序
    '@typescript-eslint/method-signature-style': 'error', // Enforce using a particular method signature syntax
    // 'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'off', // Disallow generic Array constructors
    '@typescript-eslint/no-base-to-string': 'off', // Require .toString() to only be called on objects which provide useful information when stringified
    '@typescript-eslint/no-confusing-non-null-assertion': 'error', // Disallow non-null assertion in locations that may be confusing
    '@typescript-eslint/no-confusing-void-expression': 'off', // Require expressions of type void to appear in statement position
    // 'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error', // Disallow duplicate class members
    // 'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off', // Disallow duplicate imports
    '@typescript-eslint/no-dynamic-delete': 'off', // Disallow using the delete operator on computed key expressions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off', // Disallow empty functions
    '@typescript-eslint/no-empty-interface': 'warn', // Disallow the declaration of empty interfaces
    '@typescript-eslint/no-extra-non-null-assertion': 'off', // Disallow extra non-null assertions
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off', // Disallow unnecessary parentheses
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off', // Disallow unnecessary semicolons
    '@typescript-eslint/no-extraneous-class': 'off', // Disallow classes used as namespaces
    '@typescript-eslint/no-floating-promises': 'off', // Require Promise-like statements to be handled appropriately
    '@typescript-eslint/no-for-in-array': 'error', // Disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-implicit-any-catch': 'off', // Disallow usage of the implicit any type in catch clauses
    'no-implied-eval': 'off', // Disallow the use of eval()-like methods
    '@typescript-eslint/no-implied-eval': 'off', // Disallow the use of eval()-like methods
    '@typescript-eslint/no-inferrable-types': 'off', // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
    'no-invalid-this': 'off', //
    '@typescript-eslint/no-invalid-this': 'warn', // Disallow this keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-void-type': 'off', // Disallow void type outside of generic or return types
    // 'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error', // Disallow function declarations that contain unsafe references inside loop statements
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off', // Disallow literal numbers that lose precision
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off', // Disallow magic numbers
    '@typescript-eslint/no-misused-new': 'error', // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-promises': 'off', // Disallow Promises in places not designed to handle them
    '@typescript-eslint/no-namespace': 'warn', // Disallow TypeScript namespaces
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // Disallow non-null assertions after an optional chain expression
    '@typescript-eslint/no-parameter-properties': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': isTypeAwareEnabled ? 'error' : 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    // 'no-unused-vars': 'off',
    // 'no-use-before-define': 'off',
    // 'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    // quotes: 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',
    // semi: 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    // 'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': isTypeAwareEnabled ? 'error' : 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/indent': 'off',
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true, typedefs: true }
    ],
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // Common abbreviations are known and readable
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }]
};
