import { initSDK, SDK } from 'web-sdk-yalc' // 本地调试包
// import { initSDK } from 'web-sdk-test' // test 环境调试包

export class WebSdk {
  public readonly SDK_KEY = 'xxxxx'
  public static SDK = SDK
  public initSDK () {
    initSDK(this.SDK_KEY)
  }
}