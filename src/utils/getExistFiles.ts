import { existsSync } from 'fs';
import { join } from 'path';

export default function getExistFile({
    cwd,
    files,
    returnRelative
}: {
    cwd: string;
    files: string[];
    returnRelative?: boolean;
}) {
    for (const file of files) {
        const absFilePath = join(cwd, file);
        if (existsSync(absFilePath)) {
            return returnRelative ? file : absFilePath;
        }
    }
}
