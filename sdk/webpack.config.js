const { merge } = require("webpack-merge")
const ChangePkgPlugin = require('./webpack.plugin')
const webpackBase = require('./webpack.config.base')
const webpackEnvConfig = require('./webpack.config.env')
const envConfig = webpackEnvConfig.prod

module.exports = merge([webpackBase, {
  plugins: [
    ...webpackBase.plugins,
    new ChangePkgPlugin({
      env: 'prod',
      name: envConfig.PkgName,
      main: envConfig.PkgMain,
      types: envConfig.PkgTypes,
      version: envConfig.PkgVersion
    })
  ]
}])
