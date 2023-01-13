## fabric

一个配置文件的集合，包含了prettier, eslint, stylelint, husky, git hooks 可以自动生成配置文件

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
    // 初始化项目配置
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
