/*
 * @Author: Chris
 * @Date: 2021-08-24 17:08:59
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-24 18:01:36
 * @Descripttion: **
 */
import { login } from '../../services/login'

export default {
  namespace: 'login',
  state: {
    userInfo: ''
  },

  effects: {
    *submit({ payload }, { call }) {
      const res = yield call(login, payload);
      return res;
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};