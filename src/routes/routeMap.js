import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from '../containers';

class RouteMap extends React.Component{
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    )
  }
}

export default RouteMap;
