import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from '../containers';
import Home from '../containers/Home';

class RouteMap extends React.Component{
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}

export default RouteMap;
