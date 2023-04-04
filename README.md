# yalc-project
yalc 成型解决方案，一个项目写sdk代码，一个项目写sdk的demo

考虑到演示效果，这里创建了两个文件夹作为演示

如果sdk不是开源项目这个方案将非常有用，可以实现两个git地址进行分离，demo项目作为开源让开发者查看

如果sdk是开源的还是建议使用 `monorepo` 方案，该方案旨在解决一部分代码开源，一部分代码不开源的问题

目录说明
sdk: sdk项目文件夹，可以为单独的git项目

demo: 写sdk demo的项目，可以为单独的git项目

sdk项目内需要添加 npmignore, 与gitignore不同，npmigonre没有忽略`/lib`文件夹，在yalc打包后才能包含lib的包，在demo项目里面才能使用这个yalc的包