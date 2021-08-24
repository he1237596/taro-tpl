/*
 * @Author: Chris
 * @Date: 2021-08-24 17:04:20
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-24 17:17:14
 * @Descripttion: **
 */

export default {
  namespace: 'common',
  state: {
    number:0
  },

  effects: {
    // *getList({ payload },{ select, call, put }){
    //   const number = yield select(state => state.number);
    // }
  },

  reducers: {
    save(state, { payload }) {
      console.log(state,payload)
      return { ...state, ...payload };
    },
  },
};