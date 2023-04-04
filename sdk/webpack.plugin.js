const fs = require('fs')
const path = require('path')
const PluginName = 'ChangePkgPlugin'
// 根据环境动态修改package.json 修改name, main, types 字段使得匹配不同环境的情况
class ChangePkgPlugin {
  params = {}
  constructor(data) {
    console.log('ChangePkgPlugin params is: ', data)
    this.params = data
  }

  apply(compiler) {
    compiler.hooks.environment.tap(PluginName, () => {
      console.log(`The ${PluginName} build process is starting!`)
      const { name, main, types, version } = this.params
      const pkgPath = path.join(__dirname, './package.json')
      let pkg = fs.readFileSync(pkgPath)
      pkg = JSON.parse(pkg)
      pkg.main = main || '/index'
      pkg.types = types || '/types/index'
      pkg.name = name || 'xx-sdk'
      pkg.version = version || '0.1.0'
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
    })
    compiler.hooks.afterCompile.tap(PluginName, () => {
      console.log(`Then  ${PluginName} process is compiled!`)
    })
  }
}
module.exports = ChangePkgPlugin
