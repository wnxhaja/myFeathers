import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Text = () => '<p>hello world</p>';

const routes = (
  <Router history={browserHistory} >
    <Route path="/" component={Text}>
    </Route>
  </Router>
);

export default routes;
