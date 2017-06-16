import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import RouteMap from './routes/routeMap';

import Header from './components/Header/index';

ReactDOM.render(
  <RouteMap />,
  document.getElementById('root')
);
