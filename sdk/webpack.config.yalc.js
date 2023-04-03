const { merge } = require("webpack-merge")
const webpackBase = require('./webpack.config.base')
const ChangePkgPlugin = require('./webpack.plugin')
const webpackEnvConfig = require('./webpack.config.env')
const envConfig = webpackEnvConfig.local

module.exports = merge([webpackBase, {
  plugins: [
    ...webpackBase.plugins,
    new ChangePkgPlugin({
      env: 'local',
      name: envConfig.PkgName,
      main: envConfig.PkgMain,
      types: envConfig.PkgTypes,
      version: envConfig.PkgVersion
    })
  ]
}])
