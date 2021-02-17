import React, { Component } from 'react';
import config from 'config';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { withRouter, Redirect } from 'react-router-dom';

// import { logo } from 'assets/images';
import { notify } from 'utils/notification';
import { DATA_VIEWS } from 'constants/routes';
import { messageStatus, AUTHORIZATION } from 'constants/messageStatus';

import * as authService from 'services/auth';
import * as roleService from 'services/roles';
import * as tokenService from 'services/token';

import CONSTANTS from '../../constants/appConstant';

import Spinner from 'components/common/Spinner';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      isLoading: false
    };
  }

  componentDidMount() {
    if (tokenService.getAccessToken()) {
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  onSuccess = async response => {
    let { tokenId } = response;

    this.setState({
      isLoading: true
    });

    try {
      let response = await authService.login(tokenId);

      tokenService.setProfilePicture(response.data.picture);
      tokenService.setAccessToken(response.data.access_token);

      if (response.data && response.data.roles.indexOf(CONSTANTS.ADMIN) > -1) {
        roleService.setRoleStatus(true);
      } else {
        roleService.setRoleStatus(false);
      }

      this.props.history.push(DATA_VIEWS);
    } catch (error) {
      tokenService.clear();
      this.setState({
        isLoading: false
      });
      notify(messageStatus.ERROR, error);
    }
  };

  onFailure = () => {
    notify(messageStatus.ERROR, AUTHORIZATION.SIGN_IN_FAIL);
  };

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to={DATA_VIEWS} />;
    }

    return (
      <div className="Login container-fluid d-flex align-items-center justify-content-center">
        <div className="Login__box d-flex align-items-center flex-column">
          <div className="Login__box__companylogo">
            {/* <img src={logo} alt="company logo" /> */}
          </div>
          <div className="Login__box__mainbox">
            <div className="Social_auth">
              {this.state.isLoading ? (
                <Spinner />
              ) : (
                <GoogleLogin
                  clientId={config.googleClientId}
                  onSuccess={this.onSuccess}
                  onFailure={this.onFailure}
                  className="Google__btn d-flex align-items-center"
                >
                  <span className="Google__btn__icon" />
                  Sign in with Google
                </GoogleLogin>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export default withRouter(Login);
