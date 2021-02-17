import React from 'react';
import HeaderKit from './HeaderKit';
// import { logo } from 'assets/images';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="d-flex Header">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between Header__row">
              <div className="Header__row__left-part d-flex align-items-center">
                <div className="Header__row__logo">
                  <a href="#index">
                    {/* <img src={logo} alt="logo" /> */}
                  </a>
                </div>
                <div className="Nav">
                  <div className="d-flex">
                    <div className="Nav__menu-nodes Nav__menu-nodes--active">
                      <a href="">Users</a>
                    </div>
                    <div className="Nav__menu-nodes">
                      <a href="">Conenctions</a>
                    </div>
                    <div className="Nav__menu-nodes">
                      <a href="">Dataviews</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Header__row__right-part d-flex align-items-center">
                <div className="Header__row__user-profile">
                  <img src="https://picsum.photos/40/40/?random" alt="profile pic" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header kit code  */}
        <HeaderKit />
      </div>
    );
  }
}

export default Header;
