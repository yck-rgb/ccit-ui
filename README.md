# ccit-ui

#### 介绍

几木云基于 vue2.x 的 ui 组件库

#### 目录介绍

```base
   > packages文件夹里写具体组件
   > components.json 里写入新写组件路径
   > example文件夹是基于vuepress的组件文档
```

#### 命令介绍

    > npm i 安装组件库依赖
    > npm run doc:install  安装组件文档依赖
    > npm run doc:dev 启动组件文档开发环境 （默认端口 3333)
    > npm run doc:build 打包组件文档开发环境
    > npm run lib 打包组件库以及样式
    > npm run pub 发布组件库，发布前确保已经登录
    > npm run git 全量提交修改，提交前会自动更新（该命令在支持 git 的终端执行，vscode 或者 powershell)

        ``` base
        npm run git 提交的信息
        ```

### git

    > git branch 查看分支
    > git checkout master 切换工作分支
    > git branch -u origin/master

#### 创建分支 (yck1)

     + git branch yck1 // 本地创建分支
     + git push origin yck1  // 本地创建的分支推送到远程
     + git branch -u origin/yck1  // git 工作空间全局设为分支

#### 分支代码同步主干

    + git stash // 将开发分支到代码 暂存
    + git checkout master // 切换到 master 分支
    + git pull 拉取 同事在 mster 分支上提交到代码
    + git checkout dev_1.0 // 切换到  dev_1.0 分支
    + git merge master // 将 master 分支的代码 合并到 dev_1.0 分支
    + git stash pop // 打开之前开发时 暂存的 工作
