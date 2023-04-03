const { merge } = require("webpack-merge")
const ChangePkgPlugin = require('./webpack.plugin')
const webpackBase = require('./webpack.config.base')
const webpackEnvConfig = require('./webpack.config.env')
const envConfig = webpackEnvConfig.test
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = merge([webpackBase, {
  plugins: [
    ...webpackBase.plugins,
    new ChangePkgPlugin({
      env: 'test',
      name: envConfig.PkgName,
      main: envConfig.PkgMain,
      types: envConfig.PkgTypes,
      version: envConfig.PkgVersion
    }),
    new CopyPlugin(
      {
        patterns: [
          {
            noErrorOnMissing: false, // 默认false，不会对丢失的文件产生错误
            force: false, // 默认false，覆盖已经存在的文件
            priority: 0, // 允许指定复制具有相同目标名称的文件的优先级
            from: path.resolve(__dirname, "./package.json"), // 拷贝来源
            to: path.resolve(__dirname, "lib/") // 拷贝到的位置
          }
        ]
      }
    )
  ]
}])
