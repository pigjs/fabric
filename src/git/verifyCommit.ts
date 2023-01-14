// Invoked on the commit-msg git hook by husky.
import chalk from 'chalk';
import { readFileSync } from 'fs';
import type { UserConfigProps } from '../utils/getUserConfig';
import { mergeProps } from '../utils/mergeProps';
import { commitLogs } from '../utils/meta';

const defaultVerifyCommit = {
    /** 默认开启 */
    open: true,
    /** 过滤消息 默认 过滤合并分支、lerna 发布 的校验 */
    filterMsg: ['Merge branch', 'Publish'],
    /** 校验规则 */
    commitRE:
        /^((.+) )?(feat|fix|docs|UI|refactor|perf|workflow|build|CI|typos|chore|tests|types|wip|release|deps|locale|revert)(\(.+\))?: .{1,100}/
};

export interface YOption {
    /** git husky 参数 */
    HUSKY_GIT_PARAMS?: string;
    /** 用户配置 */
    userConfig?: UserConfigProps;
}

export default function (options: YOption) {
    const { HUSKY_GIT_PARAMS, userConfig } = options;
    const msgPath = HUSKY_GIT_PARAMS || process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS;
    // 不是git commit的时候
    if (!msgPath) return;
    const msg = readFileSync(msgPath, 'utf-8').trim();
    const gitConfig = userConfig?.gitConfig || {};
    const { verifyCommit: v } = gitConfig;
    const verifyCommit = mergeProps(defaultVerifyCommit, v);
    const { open, filterMsg, commitRE, customVerifyCommit } = verifyCommit;
    // 关闭时 不校验
    if (!open) {
        return;
    }
    if (customVerifyCommit) {
        const log = customVerifyCommit(msg);
        console.error(log);
        process.exit(1);
    } else {
        const filterStatus = filterMsg.some((item) => {
            if (msg.indexOf(item) !== -1) {
                return true;
            }
        });
        // 过滤当前校验
        if (filterStatus) {
            return;
        }
    }
    if (!commitRE.test(msg)) {
        console.log();
        console.error(
            `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`提交日志不符合规范`)}\n${chalk.red(
                `  合法的提交日志格式如下(分支名称 和 模块可选填)：\n`
            )}    
        ${commitLogs}`
        );

        process.exit(1);
    }
}
