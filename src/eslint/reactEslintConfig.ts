export const reactEslintRules = {
    'react/display-name': 'off', // 禁止React组件定义中缺少displayName
    'react/jsx-props-no-spreading': 'off', // 禁止JSX props 传播
    'react/state-in-constructor': 'off', // 强制类组件状态初始化样式
    'react/static-property-placement': 'off', // 强制放置React组件静态属性的位置
    'react/destructuring-assignment': 'off', // 强制一致使用道具、状态和上下文的解构赋值
    'react/jsx-filename-extension': 'off', // 禁止可能包含JSX的文件扩展名
    'react/no-array-index-key': 'warn', // 不允许在键中使用Array索引
    'react/require-default-props': 'off', // 对不是必需道具的每个道具强制执行defaultProps定义
    'react/jsx-fragments': 'off', // 为React片段强制执行简写或标准形式
    'react/jsx-wrap-multilines': 'off', // 禁止多行JSX周围缺少括号
    'react/prop-types': 'off', // 禁止React组件定义中缺少道具验证
    'react/forbid-prop-types': 'off', // 禁止某些proptype
    'react/sort-comp': 'off', // 强制组件方法顺序
    'react/react-in-jsx-scope': 'off', // 使用JSX时禁止缺少React
    'react/jsx-one-expression-per-line': 'off', // 每行需要一个JSX元素
    'react/jsx-no-comment-textnodes': 'warn', // 禁止注释作为文本节点被插入
    'react/jsx-no-target-blank': 'warn', // 禁止使用不安全的 target='_blank'
    'react/jsx-no-duplicate-props': 'error', // 防止重复的属性
    'react/jsx-no-undef': ['error', { allowGlobals: true }], // 防止未声明的变量使用
    'react/jsx-uses-react': 'warn', // 防止引入react后未使用
    'react/jsx-uses-vars': 'warn', // 防止在JSX中引入的变量未被使用
    'react/no-children-prop': 'warn', // 禁止通过属性传递子元素
    'react/no-danger-with-children': 'warn', // 禁止Children和dangerouslySetInnerHTML属性同时使用
    'react/no-deprecated': 'warn', // 禁止使用废弃的方法
    'react/no-direct-mutation-state': 'warn', // 禁止组件状态this.state直接变更,使用setState()，唯一可以使用的是在es6组件的构造函数中
    'react/no-find-dom-node': 'warn', // 禁止使用findDOMNode
    'react/no-is-mounted': 'warn', // 禁止使用isMounted
    'react/no-render-return-value': 'warn', // 禁止使用React.render的返回值
    'react/no-string-refs': 'warn', // 防止使用字符串引用
    'react/no-unescaped-entities': 'warn', // 禁止无效字符出现在标记中 ，必要的特殊字符需要进行转义
    'react/no-unknown-property': 'warn', // 禁止使用未知属性
    'react/require-render-return': 'warn', // 在es5和es6语法的render函数中，需要有return返回值
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'], // JSX语法的对齐风格 必须与包含开始标记的行对齐
    'react/jsx-tag-spacing': 'warn', // 不要在 JSX 的花括号里边加空格
    'react/jsx-boolean-value': 'warn', // 当属性值为true时可以省略
    /** react-hooks rules */
    'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    /** 与 prettier 冲突 */
    'react/self-closing-comp': 'warn', // 禁止对没有子组件使用额外的结束标记
    'react/jsx-key': 'warn', // 如果元素是被数组渲染，则需要元素上需要携带key值
}