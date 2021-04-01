import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DesignKit from './designKit';
import User from './components/User';
import Login from './components/Login';

const Router = () => (
  <Switch>
    <Route exact path="/design/user" component={User} />
    <Route exact path="/design/login" component={Login} />
    <Route exact path="/design/design-kit" component={DesignKit} />
  </Switch>
);

export default Router;
