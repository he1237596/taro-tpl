/*
 * @Author: Chris
 * @Date: 2021-08-24 17:19:48
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-24 17:19:48
 * @Descripttion: **
 */
import request from '../utils/request'

const LOGIN = '/api/applets/user/login'
const CHANGEPASSWORD = '/api/applets/user/resetPassword/submit'

export function login(data) {//POST
  return request({
    url: LOGIN,
    data,
    method: 'POST',
    loading: false//开启请求loading
  })
}

// export function requestCode(data) {// GET
//   return request({
//     url: `${REQUESTCode}${data}`,
//     method: 'GET'
//   })
// }

export function requestChangePassword(data) {// PUT
  return request({
    url: CHANGEPASSWORD,
    data,
    method: 'PUT'
  })
}