import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//生成Redux 的 store 对象
const store = configureStore();

import RouteMap from './routes/routeMap';

ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
);
