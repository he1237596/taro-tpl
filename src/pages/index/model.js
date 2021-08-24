
export default {
  namespace: 'index',
  state: {

  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};