import fs from 'fs';
import path from 'path';
import { UserConfigProps } from '../utils/getUserConfig';
import { mergeProps } from '../utils/mergeProps';

/** 获取分支名称 */
function getTargetBranch(MERGE_MSG: string) {
    const content = fs.readFileSync(MERGE_MSG, 'utf-8');
    if (content) {
        const branch = content.split('\n')[0]?.split(' ')[2].replace(/'/g, '');
        return branch;
    }
}

const defaultVerifyMergeBranch = {
    /** 默认开启 */
    open: true,
    /** 默认禁止合并的分支 */
    forbidMergeBranch: ['test', 'test2', 'dev', 'dev2']
};

export interface YOptions {
    targetBranch: string;
    userConfig?: UserConfigProps;
}

/**
 * 校验合并的分支
 */
function verifyBranch(options: YOptions) {
    const { targetBranch, userConfig } = options;
    const gitConfig = userConfig?.gitConfig || {};
    const { verifyMergeBranch: v } = gitConfig;
    const verifyMergeBranch = mergeProps(defaultVerifyMergeBranch, v);
    const { open, forbidMergeBranch, customVerifyMergeBranch } = verifyMergeBranch;
    // 关闭时不校验
    if (!open || !targetBranch) {
        return;
    }
    if (customVerifyMergeBranch) {
        const status = customVerifyMergeBranch(targetBranch);
        if (status) {
            throw new Error(`禁止将 ${targetBranch} 分支，合并到当前分支，请使用 git merge --abort 撤销合并`);
        }
    }
    if (forbidMergeBranch.includes(targetBranch)) {
        throw new Error(`禁止将 ${targetBranch} 分支，合并到当前分支，请使用 git merge --abort 撤销合并`);
    }
}

export interface YVerifyMergeBranch {
    /** git hooks */
    hooks: 'pre-merge-commit' | 'pre-commit';
    cwd: string;
    userConfig?: UserConfigProps;
}

export default function (options: YVerifyMergeBranch) {
    const { hooks, cwd, userConfig } = options;
    if (hooks === 'pre-merge-commit') {
        const GIT_REFLOG_ACTION = process.env.GIT_REFLOG_ACTION;
        const targetBranch = GIT_REFLOG_ACTION?.split(' ')?.[1];
        if (!targetBranch) return;
        verifyBranch({ targetBranch, userConfig });
    } else if (hooks === 'pre-commit') {
        // git merge msg 文件 存在则说明是合并请求
        const MERGE_MSG = path.resolve(cwd, '.git/MERGE_MSG');
        if (fs.existsSync(MERGE_MSG)) {
            const targetBranch = getTargetBranch(MERGE_MSG);
            if (!targetBranch) return;
            verifyBranch({ targetBranch, userConfig });
        }
    }
}
