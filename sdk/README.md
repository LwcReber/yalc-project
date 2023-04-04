# sdk

1. `npm i`
2. 本地运行`npm run local`, 会生成yalc包，需要全局安装yalc, 在demo项目上引入yalc包 `npm run add`, 并且需要在vite.config.ts 配置包名 
```
  optimizeDeps: {
    include: ['web-sdk-yalc']
  }

```

3. 打包test环境的test包，`npm run build:test` `npm run pub` 会上传包到npm上
4. 打包对外的test包，`npm run build:uat` `npm run pub` 会上传包到npm上
5. 打包对外的正式包，`npm run build` `npm run pub` 会上传包到npm上

3、4、5流程的打包需要注意version更新

注意，ts文件引入时的路径全部是相对路径，为了避免打包后的types类型文件无法找到对应的类型声明