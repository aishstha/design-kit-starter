import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LeftMenu = props => {
  const { menuState } = props;

  return (
    <div className={classnames('SideMenu SideMenu--left', { open: menuState })}>
      <div className="SideMenu__close-icon" onClick={() => props.toggleMenu({ isLeftMenuOpen: false })}>
        <i className="ed-close" />
      </div>
      <h3 className="page-title page-title--small pt-35 pb-20 pr-30 pl-30">Sort User</h3>
      <div className="SideMenu__content pr-30 pl-30">
        <form>
          <div className="form-group">
            <label className="form-group__label form-group__label--block">First Name</label>
            <input type="text" className="form-group__control" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label className="form-group__label form-group__label--block">Last Name</label>
            <input type="text" className="form-group__control" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label className="form-group__label form-group__label--block">Email Address</label>
            <input type="text" className="form-group__control" placeholder="Email Address" />
          </div>
          <div className="roles mb-35">
            <h5 className="mb-15">Roles</h5>
            <div className="form-group d-flex align-items-center">
              <input type="checkbox" className="form-group__checkbox mr-10" id="checkbox" />
              <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox">
                All
              </label>
            </div>
            <div className="form-group d-flex align-items-center">
              <input type="checkbox" className="form-group__checkbox mr-10" id="checkbox" />
              <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox">
                Administrator
              </label>
            </div>
            <div className="form-group d-flex align-items-center">
              <input type="checkbox" className="form-group__checkbox mr-10" id="checkbox" />
              <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox">
                Staff
              </label>
            </div>
          </div>
          <div className="search-within mb-35">
            <h5 className="mb-15">Search Within</h5>
            <div className="form-group">
              <label className="form-group__label form-group__label--block">Districts</label>
              <div className="form-group__icon">
                <input type="text" className="form-group__control" placeholder="Search Districts" />
                <button className="form-icon">
                  <i className="ed-search" />
                </button>
              </div>
              <div className="search-params mt-5">
                <span className="Batch Batch--regular Batch--icon mr-5">
                  Grand P <i className="ed-close Batch__icon" />
                </span>
              </div>
            </div>
            <div className="form-group">
              <label className="form-group__label form-group__label--block">Colleges</label>
              <div className="form-group__icon">
                <input type="text" className="form-group__control" placeholder="Search Colleges" />
                <button className="form-icon">
                  <i className="ed-search" />
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="form-group__label form-group__label--block">Schools</label>
              <div className="form-group__icon">
                <input type="text" className="form-group__control" placeholder="Search Schools" />
                <button className="form-icon">
                  <i className="ed-search" />
                </button>
              </div>
            </div>
          </div>
          <div className="menu-action pr-30 pl-30 d-flex align-items-center">
            <button className="btn btn--green btn--block btn--lg">Update Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

LeftMenu.propTypes = {
  toggleMenu: PropTypes.func,
  menuState: PropTypes.bool
};

export default LeftMenu;
