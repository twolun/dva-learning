
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  //异步逻辑 
  effects: {
    *fetchRemote({ payload }, { call, put }) {
      
    },
  },

  //state的更新 
  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
