/*
 * @Author: Chris
 * @Date: 2021-08-24 18:03:07
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-24 18:03:07
 * @Descripttion: **
 */
const ENV = 'dev'
const Config = {
  dev: {
    // 云MES服务的URL
    baseUrl: 'http://120.79.9.183:60002',
    imageBaseUrl: 'https://images.mogulinker.com', // 系统图片的URL
    userPublicKey: '',
    userPublicKeyId: '',
    webServerUrl: 'http://mes-test.mogulinker.com', // 云MES web服务网址
  },
  pro: {

  }
}

export default Config[ENV]