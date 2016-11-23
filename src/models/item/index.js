import pathToRegexp from 'path-to-regexp';
import {
  fetchIdsByType,
  fetchItem,
  fetchItems,
  watchList,
} from '../../services/hn';

const ITEM_TYPES = [
  'top', 'new', 'show', 'ask', 'job'
];

export default {

  namespace: 'item',

  state: {
    activeType: null,
    itemsPerPage: 20,
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: [],
    },
    itemsById: {},
  },

  subscriptions: {
    listSubscriber({ dispatch, history }) {
      let activeType = null;
      let unwatchList = null;
      let page = null;

      function fetchList(type, _page = 1) {
        page = _page;
        // dispatch({ type: 'saveActiveType', payload: type });
        dispatch({ type: 'fetchList', payload: { type, page } });
      }

      return history.listen(({ pathname }) => {
        for (const type of ITEM_TYPES) {
          const match = pathToRegexp(`/${type}/:page?`).exec(pathname);
          if (match) {
            const page = match[1];

            // fetch
            fetchList(type, page);

            // watch
            // if (activeType !== type) {
            //   activeType = type;
            //   if (unwatchList) unwatchList();
            //   unwatchList = doWatchList(type);
            // }
          }
        }
      });
    }
  },

  //异步逻辑 
  effects: {
    *fetchList({ payload }, { put, call, select }){
      console.log(payload)
      const { type, page } = payload;
      
      yield put({type: 'saveList', payload: {data: 2}})
    }
  },

  //state的更新 
  reducers: {
    'saveList'(state, action){
      return Object.assign({}, state, action.payload)
    }
  },

}
