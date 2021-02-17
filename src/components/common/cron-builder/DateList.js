import React from 'react';

import { PropTypes } from 'prop-types';
// import DropDown from 'components/common/DropDown';

const dateLists = [];

for (let index = 1; index <= 31; index++) {
  const date = { id: index, value: index, label: index };

  dateLists.push(date);
}

const DateList = props => {
  return (
    <></>
    // <DropDown
    //   {...props}
    //   dropdownOptions={dateLists}
    //   label="Select day of the month"
    //   handleChange={props.handleDropdown}
    //   name="dayOfTheMonth"
    //   placeholder="Select day of the month"
    //   isLoading={props.isLoading}
    // />
  );
};

DateList.defaultProps = {
  isLoading: false
};

DateList.propTypes = {
  handleDropdown: PropTypes.func,
  isLoading: PropTypes.bool
};

export default DateList;
