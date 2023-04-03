import { Version } from "./common/version" // 注意使用相对路径
export class SDK {
  public static isInit = false
  public static sdkKEY = ''
  public static init(key: string) {
    this.sdkKEY = key
    this.isInit = true
  }

  public static testName(name: string) {
    console.log('[ testName ] >')
    return !!name
  }

  public static getSDKVersion() {
    return Version.Version
  }
}

export function initSDK(key: string) {
  SDK.init(key)
}
