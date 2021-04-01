import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Design from './design'
import Login from './components/login'

const BaseRouter = () => (
  <Router>
    <Switch>
      <Route path="/design" component={Design} />
      <Route exact path="/dashboard" component={Login} />
    </Switch>
  </Router>
);

export default BaseRouter;
