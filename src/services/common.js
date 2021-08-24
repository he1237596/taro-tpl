/*
 * @Author: Chris
 * @Date: 2021-08-24 17:19:40
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-24 17:19:40
 * @Descripttion: **
 */
import request from '../utils/request'

const NOTICE = '/api/applets/notice/list'
export function getNotice(data) {
  return request({
    url: NOTICE,
    data,
    method: 'POST'
  })
}

export function checkStatus(data) {
  return request({
    url: NOTICE,
    data,
    method: 'POST'
  })
}