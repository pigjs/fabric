import fs from 'fs'
import path from 'path'

const execEnum = {
    'npm':'package-lock.json',
    'yarn':'yarn.lock.json',
    'pnpm':'pnpm-lock.yaml'
};

/**
 * @description 获取当前npm运行环境
 * @param {string} root 项目根目录
 */

export const getNpmExec = (root?:string)=>{
    const cwd = root || process.cwd()
    
    const npmExec = Object.keys(execEnum).find((name) => {
        const namePath = path.join(cwd,execEnum[name]);
        return fs.existsSync(namePath);
    });
    return npmExec || 'npm'
}

/**
 * @description: 转化 npm 执行语句
 * @return string
 */
export const npmExecStr = (str:string,root?:string)=>{
    const npmExec = getNpmExec(root)

    return `${npmExec} ${str}`
}

/**
 * @description 对象浅合并
 * @return {*}
 */
export function merge(obj:Object,source:Object){
    const data = {...obj}
    Object.keys(obj).forEach(key=>{
        const value = obj[key]
        if(Array.isArray(value) && Array.isArray(source[key])){
            data[key] = [...value,...source[key]]
        } else if(value instanceof Object && source[key] instanceof Object ){
            data[key] = {...value,...source[key]}
        } else {
            data[key] = source[key] || obj[key]
        }
    })
    return data
}
