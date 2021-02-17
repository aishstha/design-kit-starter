import React from 'react';
import { PropTypes } from 'prop-types';

import DropDown from '../DropDown';

import { months } from 'constants/cronBuilderConstants';

const MonthList = props => {
  return (
    <DropDown
      dropdownOptions={months}
      label="Select day of the month"
      value={props.month}
      handleChange={props.handleMonth}
      name="month"
      placeholder="Select month"
      isLoading={props.isLoading}
    />
  );
};

MonthList.defaultProps = {
  month: {},
  isLoading: false
};

MonthList.propTypes = {
  handleMonth: PropTypes.func,
  month: PropTypes.object,
  isLoading: PropTypes.bool
};

export default MonthList;
