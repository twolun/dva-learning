export default {

  namespace: 'count',

  state: 0,

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
    add(state){
      return state + 1;
    },
    minus(state){
      return state - 1
    }
  },

}