import chalk from 'chalk';
import verifyCommit from '../git/verifyCommit';
import verifyMergeBranch from '../git/verifyMergeBranch';
import getUserConfig from '../utils/getUserConfig';
import { commitLogs } from '../utils/meta';
import Init from './init';

export interface YOption {
    /** 命令 */
    cwd: string;
    args: any;
}

export type HooksType = 'commit-msg' | 'pre-commit' | 'pre-merge-commit';

export default function (options: YOption) {
    const { cwd, args } = options;

    if (args.v || args.version) {
        console.log(require('../../package.json').version);
        process.exit(0);
    } else if (args.h || args.help) {
        console.log('Usage: pig-fabric <command> [options]');
        console.log();
        console.log('Options:');
        console.log('   -v, --version          output the version number');
        console.log('   -h, --help             output usage information');
        console.log();
        console.log('Commands:');
        console.log('   install   Example Initialize eslint PretTier Stylelint husky');
        console.log('   commit-log   git commit message standard');
        console.log('   --hooks=commit-msg git commit-msg hooks');
        console.log('   --hooks=pre-commit git pre-commit hooks');
        console.log('   --hooks=pre-merge-commit   git pre-merge-commit hooks');
        process.exit(0);
    }
    const userConfig = getUserConfig({ cwd });
    const { hooks } = args;
    if (hooks === 'commit-msg') {
        const HUSKY_GIT_PARAMS = args._?.[0];
        // commit 校验
        verifyCommit({ userConfig, HUSKY_GIT_PARAMS });
        return;
    }
    if (hooks === 'pre-commit') {
        // 合并分支校验
        verifyMergeBranch({ userConfig, hooks: 'pre-commit', cwd });
        return;
    }
    if (hooks === 'pre-merge-commit') {
        // 合并分支冲突的时候，再提交 commit 会触发这个 钩子，pre-commit 就不会触发了，所以在这里也需要合并分支校验
        verifyMergeBranch({ userConfig, hooks: 'pre-merge-commit', cwd });
        return;
    }
    const isCommitLog = args._.includes('commit-log');
    if (isCommitLog) {
        // commit 规范
        console.log(chalk.green('合法的git提交日志格式如下:'));
        console.log(commitLogs);
        process.exit(0);
    }
    const isInit = args._.includes('install');
    if (isInit) {
        // 初始化
        new Init({ root: cwd });
    }
}
