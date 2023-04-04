const { merge } = require("webpack-merge")
const ChangePkgPlugin = require('./webpack.plugin')
const webpackBase = require('./webpack.config.base')
const webpackEnvConfig = require('./webpack.config.env')
const envConfig = webpackEnvConfig.uat

module.exports = merge([webpackBase, {
  plugins: [
    ...webpackBase.plugins,
    new ChangePkgPlugin({
      env: 'uat',
      name: envConfig.PkgName,
      main: envConfig.PkgMain,
      types: envConfig.PkgTypes,
      version: envConfig.PkgVersion
    })
  ]
}])
