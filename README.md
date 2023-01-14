## fabric

一个配置文件的集合，包含了 prettier, eslint, stylelint, husky, git hooks, 可以自动生成配置文件

### 安装

```js
    npm i @pig/fabric -D
    // or
    yarn add @pig/fabric -D
    // or
    pnpm add @pig/fabric -D
```

### 使用

```js
    // package.json 中配置命令
    {
        scripts:{
            "pig-fabric:install":"pig-fabric install"
        }
    }
    // 初始化 fabric 配置
    npm run pig-fabric:install
```

### 命令

-   install Example Initialize eslint PretTier Stylelint husky
-   commit-log git commit message standard
-   --hooks=pre-commit git pre-commit hooks
-   --hooks=pre-merge-commit git pre-merge-commit hooks
-   --hooks=commit-msg git commit-msg hooks

### 如果你使用的是 pnpm 的话，需要在 .npmrc 文件中增加一些配置

shamefully-hoist=true

### 如何自定义 git commit、git merge branch 校验规则

在项目根目录创建 .pigrc.js 或者 .pigrc.json 文件

```ts
/** 用户自定义配置 */
interface UserConfigProps {
    /** git 相关配置 */
    gitConfig?: {
        /** 校验commit */
        verifyCommit?: {
            /** 是否开启 */
            open?: boolean;
            /** 过滤掉msg */
            filterMsg?: string[];
            /** 校验的规则 */
            commitRE?: RegExp;
            /** 自定义校验 通过返回空 不通过 返回一个错误字符串，在终端打印 */
            customVerifyCommit?: (msg: string) => string;
        };
        /** 校验合并的分支 */
        verifyMergeBranch?: {
            /** 是否开启 */
            open?: boolean;
            /** 禁止合并的分支 */
            forbidMergeBranch?: string[];
            /** 自定义校验 true-允许合并 false-禁止合并 */
            customVerifyMergeBranch?: (branch: string) => boolean;
        };
    };
}
```
