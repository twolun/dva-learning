import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ListPage from './routes/ListPage';
import Users from './routes/Users';
import Count from './routes/Count';
import Products from './routes/Products';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/count" component={Count} />
      <Route path="/products" component={Products} />
      <Route path="/top">
      	<IndexRoute component={ListPage} />
      	<Route path=":page" component={ListPage} />
      </Route> 
    </Router>
  );
};
