## git 规范

### git commit

git commit 提交规范

示例：

```
    git commit -m "1.0.0 feat(xxx): 添加了xxx"
```

格式: 任务编号/分支号（选填）类型(模块(选填)): 消息

[taskId/branch?] [(scope)?]: message

#### 类型

-   feat 新功能
-   fix 修复 bug
-   UI 修改样式
-   docs 修改文档
-   perf 性能相关
-   refactor 重构相关（不是新增功能，也不是 bug 改动）
-   workflow 工作流
-   build 项目打包构建相关的配置修改
-   CI 持续化集成相关
-   release 发版
-   tests 测试
-   typos 拼写错误
-   types 类型错误
-   revert 恢复上一次提交（回滚）
-   chore 其他修改（不在上诉类型中的修改）
-   wip 工作中 还没完成
-   deps 依赖相关的修改
-   locale 国际化相关

### git merge branch

git 分支 合并规范

禁止 test dev 测试分支、开发分支合并到其他分支
