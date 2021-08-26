/*
 * @Author: Chris
 * @Date: 2021-08-24 13:50:29
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-25 10:17:38
 * @Descripttion: **
 */
export default {
  pages: [
    'pages/index/index',
    'pages/login/index'
  ],
  // permission: {
  //   'scope.userLocation': {
  //     desc: '你的位置信息将用于小程序位置接口的效果展示'
  //   }
  // },
  tabBar: {
    list:[
      {
        pagePath: 'pages/index/index',
        text: '首页',
        // iconPath: '',
        // selectedIconPath: '',
      },
      {
        pagePath: 'pages/login/index',
        text: '登录',
        // iconPath: '',
        // selectedIconPath: '',
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
