// ChangePkgPlugin 环境相关配置
// PkgName 根据需求自定义
const envConfig = {
  local: {
    PkgName: 'web-sdk-yalc',
    PkgMain: './index',
    PkgTypes: './types/index',
    PkgVersion: '0.0.25'
  },
  test: {
    PkgName: 'web-sdk-test',
    PkgMain: './index',
    PkgTypes: './types/index',
    PkgVersion: '0.0.24'
  },
  uat: {
    PkgName: 'web-sdk-uat',
    PkgMain: './index',
    PkgTypes: './types/index',
    PkgVersion: '0.1.0'
  },
  prod: {
    PkgName: 'web-sdk',
    PkgMain: './index',
    PkgTypes: './types/index',
    PkgVersion: '0.1.0'
  }
}

module.exports = envConfig
