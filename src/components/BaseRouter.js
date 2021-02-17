import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import designKit from '../components/DesignKit/DesignKit.js';

const BaseRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/design" component={designKit} />
      <Redirect to="/design" />
    </Switch>
  </Router>
);

export default BaseRouter;
