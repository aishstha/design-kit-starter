import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { LOGIN } from 'constants/routes';
import * as tokenService from 'services/token';

class PrivateRoute extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  setLogin(bool) {
    this.setState({ isLoggedIn: bool });
  }

  componentDidMount() {
    if (!tokenService.getAccessToken()) {
      this.setLogin(false);
    } else {
      this.setLogin(true);
    }
  }

  render() {
    let { isLoggedIn } = this.state;

    return isLoggedIn ? <Route {...this.props} /> : <Redirect to={LOGIN} />;
  }
}

export default withRouter(PrivateRoute);
