使用 `npm run watch` 前如果用了yalc的包，先要确认有没有安装了yalc 的包，如果没有先执行
`npm run add` 添加yalc包到本地，这时package.json会新增yalc包名，需要注意如果发布到test环境的时候需要手动删除掉yalc包，避免npm install 时因为找不到yalc连接导致安装失败，可以使用`npm run remove`移除yalc包