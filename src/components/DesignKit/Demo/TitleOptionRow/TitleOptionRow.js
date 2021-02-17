import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const TitleOptionRow = props => {
  return (
    <div className="Title-option-row d-flex justify-content-between align-items-center">
      <div className="Title-option-row__left d-flex justify-content-between align-items-center">
        <div className="Title-option-row__left__title mr-25 d-flex align-items-center">
          <div className="Filter-trigger mr-15" onClick={() => props.toggleMenu({ isLeftMenuOpen: true })}>
            <i className="ed-funnel" />
          </div>
          <h3 className="page-title">Page Title</h3>
        </div>
        <div className="Pill-navigation d-flex align-items-center">
          <NavLink
            to={'#'}
            className="Pill-navigation__link Pill-navigation__link--first Pill-navigation__link--active"
            activeClassName="Pill-navigation__link--active"
          >
            Category
          </NavLink>
          <NavLink
            to={'#'}
            className="Pill-navigation__link Pill-navigation__link--end"
            activeClassName="Pill-navigation__link--active"
          >
            Percent
          </NavLink>
        </div>
      </div>
      <div className="Title-option-row__right">
        <div className="Title-option-row__right__action-container">
          <button className="btn btn--green" onClick={() => props.toggleMenu({ isRightMenuOpen: true })}>
            Add Connection
          </button>
        </div>
      </div>
    </div>
  );
};

TitleOptionRow.propTypes = {
  toggleMenu: PropTypes.func
};

export default TitleOptionRow;
