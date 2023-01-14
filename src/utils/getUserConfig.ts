import { existsSync } from 'fs';
import { isAbsolute, resolve } from 'path';

import getExistFile from './getExistFiles';

export interface UserConfigProps {
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

export const CONFIG_FILES = ['.pigrc.js', '.pigrc.json'];

export default function getUserConfig({
    cwd,
    customPath
}: {
    cwd: string;
    customPath?: string;
}): UserConfigProps | undefined {
    let finalPath = '';

    if (customPath) {
        finalPath = isAbsolute(customPath) ? customPath : resolve(process.cwd(), customPath);
        if (!existsSync(finalPath)) {
            return;
        }
    }

    const configFile = finalPath || getExistFile({ cwd, files: CONFIG_FILES });
    if (!configFile) {
        return;
    }

    const userConfig = require(configFile);
    return userConfig;
}
