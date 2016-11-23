import fetch from 'isomorphic-fetch';
export default {
  namespace: 'products',
  state: {
    list: [],
    loading: false,
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'query' });
    },
  },

  effects: {
    *query(_, { put }){
      const { success, data } = yield fetch(`/api/products`).then(res => res.json())

      console.log(success, data)
      if(success){
        yield put({
          type: 'querySuccess',
          payload: data,
        })
      }
    },
    *vote({ payload }, { put }){
      const { success } = yield fetch(`/api/products/vote?id=${payload}`).then(res => res.json());
      if (success) {
        yield put({
          type: 'voteSuccess',
          payload,
        });
      }
    }
  },
  reducers: {
    query(state) {
      console.log('正在加载')
      return { ...state, loading: true, };
    },
    querySuccess(state, { payload }) {
      return { ...state, loading: false, list: payload };
    },
    vote(state) {
      return { ...state, loading: true };
    },
    voteSuccess(state, { payload }) {
      const newList = state.list.map(product => {
        if (product.id === payload) {
          return { ...product, vote:product.vote + 1 };
        } else {
          return product;
        }
      });
      return { ...state, list: newList, loading: false };
    },
  }
}