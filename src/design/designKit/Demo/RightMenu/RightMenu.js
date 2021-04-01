import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RightMenu = props => {
  const { menuState } = props;

  return (
    <div className={classnames('SideMenu SideMenu--right', { open: menuState })}>
      <div
        className="SideMenu__close-icon"
        onClick={() => {
          props.toggleMenu({ isRightMenuOpen: false });
        }}
      >
        <i className="ed-close" />
      </div>
      <h3 className="page-title page-title--bordered pt-35 pb-20 mr-30 ml-30">Edit Connection</h3>
      <div className="SideMenu__content pr-30 pl-30 pt-25">
        <div className="Connection-type mb-20">
          <h5 className="mb-15">Connection Type</h5>
          <div className="d-flex">
            <div className="form-group d-flex align-items-center mr-25">
              <input type="radio" className="form-group__radio mr-10" id="external" name="connection-type" />
              <label className="form-group__label form-group__label--nomargin" htmlFor="external">
                External Connection
              </label>
            </div>
            <div className="form-group d-flex align-items-center">
              <input type="radio" className="form-group__radio mr-10" name="connection-type" />
              <label className="form-group__label form-group__label--nomargin">
                Connection
              </label>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label className="form-group__label form-group__label--block">Server URL</label>
            <input type="text" className="form-group__control" placeholder="Server URL" />
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label className="form-group__label form-group__label--block">ID</label>
              <input type="text" className="form-group__control" placeholder="ID" />
            </div>
            <div className="form-group col-sm-6">
              <label className="form-group__label form-group__label--block">Port</label>
              <input type="text" className="form-group__control" placeholder="Port No" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-group__label form-group__label--block">Application Key</label>
            <input type="text" className="form-group__control" placeholder="Application Key" />
          </div>
          <div className="form-group">
            <label className="form-group__label form-group__label--block">Secret</label>
            <div className="form-group__icon">
              <input type="text" className="form-group__control" placeholder="Secret" />
              <button className="form-icon">
                <i className="ed-eye" />
              </button>
            </div>
          </div>
          <div className="menu-action pr-30 pl-30 row align-items-center">
            <div className="col-xs-6">
              <button className="btn btn--green btn--block btn--lg">Save Changes</button>
            </div>
            <div className="col-xs-6">
              <button className="btn btn--grey btn--block btn--lg">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

RightMenu.propTypes = {
  toggleMenu: PropTypes.func,
  menuState: PropTypes.bool
};

export default RightMenu;
