import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import App from '../containers';

import ListIndex from '../components/ListIndex';

import Item1 from '../components/Item1';
import Item2 from '../components/Item2';
import Item3 from '../components/Item3';
import Item4 from '../components/Item4';
import Item5 from '../components/Item5';
import Item6 from '../components/Item6';


class RouteMap extends React.Component{
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={ListIndex} />
          <Route path="/item1" component={Item1} />
          <Route path="/item2" component={Item2} />
          <Route path="/item3" component={Item3} />
          <Route path="/item4" component={Item4} />
          <Route path="/item5" component={Item5} />
          <Route path="/item6" component={Item6} />
        </Route>
      </Router>
    )
  }
}

export default RouteMap;
