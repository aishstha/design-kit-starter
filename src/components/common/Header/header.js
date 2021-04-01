import React from 'react';
// import { logo } from 'assets/images';
import { withRouter, NavLink } from 'react-router-dom';

import * as authService from 'services/auth';
import { getProfilePicture } from 'services/token';

import { USERS, CONNECTIONS, DATA_VIEWS } from 'constants/routes';

const Header = () => {
  function handleLogout() {
    authService.logout();
  }

  return (
    <header className="d-flex Header flex-wrap">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between Header__row">
          <div className="Header__row__left-part d-flex align-items-center">
            <div className="Header__row__logo">
              <NavLink to={DATA_VIEWS}>
                {/* <img src={logo} alt="logo" /> */}
              </NavLink>
            </div>
            <div className="Nav">
              <div className="d-flex flex-wrap">
                <div className="Nav__menu-nodes">
                  <NavLink to={DATA_VIEWS} activeClassName="Nav__menu-nodes__active">
                    Dataviews
                  </NavLink>
                </div>
                <div className="Nav__menu-nodes">
                  <NavLink to={CONNECTIONS} activeClassName="Nav__menu-nodes__active">
                    Connections
                  </NavLink>
                </div>
                <div className="Nav__menu-nodes">
                  <NavLink to={USERS} activeClassName="Nav__menu-nodes__active">
                    Users
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="Header__row__right-part d-flex align-items-center">
            <span className="Batch Batch--regular Batch--icon mr-15" onClick={handleLogout}>
              Logout <i className="ed-log-out Batch__icon ml-10" />{' '}
            </span>
            <div className="Header__row__user-profile">
              <img src={getProfilePicture()} alt="user-img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
