import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import deleteAsync from 'del'
import copyfiles from 'copyfiles'
import chalk from 'chalk'
import {delOriginalConfig,originalConfigFiles,lintStaged,scripts,copyFiles,devDependencies,huskyCopyFiles} from '../utils/meta'
import {getNpmExec} from '../utils'
import execa from 'execa'

const prompt = inquirer.prompt

interface YOption {
    root:string
}

export default class Init {

    root:string

    constructor(options:YOption){
        this.root = options.root
        this.install()
    }
    async install(){
        await this.detectionConfig()
        await this.setPackage()
        await this.addHusky()
        await this.createFiles()
        console.log('✅ The fabric is successfully initialized. ')
    }   
    // 检测 是否已经存在 eslint prettier stylelint husky 配置
    async detectionConfig(){
        const gitPath = path.join(this.root,'.git')
        if (!fs.existsSync(gitPath)) {
            const url = 'https://typicode.github.io/husky/#/?id=custom-directory';
            console.log(chalk.red(`.git can't be found (see ${url})`))
            process.exit(0)
        }
        const packagePath = path.join(this.root,'package.json')
        if(!fs.existsSync(packagePath)){
            console.log("package.json can't be found")
            process.exit(0)
        }
        const status = originalConfigFiles.some(file=>{
            const filePath = path.join(this.root,file)
            if(fs.existsSync(filePath)){
                return true
            }
            return false
        })
        if(status){
            const {delOriginalConfig:name} = await prompt(delOriginalConfig)
            if(name === 'no'){
                process.exit(0)
            }else {
                await this.delFiles(originalConfigFiles)
            }
        }
    }
    // 删除已经存在的 配置文件
    async delFiles(files:string[] | string){
        files = this.pathJoin(files)
        await deleteAsync(files)
    }
    // 路径拼接
    pathJoin(files:string | string[],root:string=this.root){
        files = Array.isArray(files)?files:[files]
        files = files.map(file=>{
            return path.join(root,file)
        })
        return files
    }
    createConfigFile(files:string[],target?:string){
        const targetSrc = target?path.join(this.root,target):this.root

        return new Promise((resolve,reject)=>{
            const copyFilesPaths = this.pathJoin(files,path.join(__dirname,'../../template'))
            copyfiles([...copyFilesPaths,targetSrc],{up:true},(err)=>{
                if(err){
                    reject(err)
                }else {
                    files.forEach((file)=>{
                        const fileSrc = target?`${target}/${file}`:file
                        console.log(`create a file for ${chalk.yellow(fileSrc)}`)
                    })
                    resolve(true)
                }
            })
        })
    }
    // 修改 package
    setPackage(){
        const packagePath = path.join(this.root,'./package.json')
        const packageContent = require(packagePath)
        packageContent.scripts = {
            ...packageContent.scripts,
            ...scripts
        },
        packageContent.devDependencies = {
            ...packageContent.devDependencies,
            ...devDependencies
        }
        packageContent['lint-staged'] = lintStaged
        fs.writeFileSync(packagePath,JSON.stringify(packageContent,null,4))
    }
    // 添加 husky
    async addHusky(){
        const npmExec = getNpmExec(this.root)
        // 安装依赖
        await execa(npmExec,['install'],{stdio: 'inherit',shell: true })
        await execa(npmExec,['run','prepare'],{stdio: 'inherit',shell: true })
        
    }

    async createFiles(){
        // 创建 eslint prettier stylelint 配置文件
        await this.createConfigFile(copyFiles)
        // 创建 husky 相关 hooks
        await this.createConfigFile(huskyCopyFiles,`.husky`)
    }
}