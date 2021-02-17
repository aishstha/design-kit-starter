import React from 'react';
import RcTimePicker from 'rc-time-picker';

import 'rc-time-picker/assets/index.css';

import { PropTypes } from 'prop-types';

const TimePicker = props => {
  const { customClassName, name, showSecond, handleChange, format, defaultValue, open, inputReadOnly, ...rest } = props;

  return (
    <React.Fragment>
      <RcTimePicker
        name={name}
        className={`${customClassName}`}
        showSecond={showSecond}
        onChange={handleChange}
        format={format}
        defaultValue={defaultValue}
        open={open}
        inputReadOnly={inputReadOnly}
        {...rest}
      />
    </React.Fragment>
  );
};

TimePicker.defaultProps = {
  name: '',
  showSecond: false,
  defaultValue: {},
  handleChange: () => {},
  format: '',
  inputReadOnly: true,
  customClassName: '',
  open: false
};

TimePicker.propTypes = {
  name: PropTypes.string,
  showSecond: PropTypes.bool,
  defaultValue: PropTypes.object,
  handleChange: PropTypes.func,
  format: PropTypes.string,
  inputReadOnly: PropTypes.bool,
  open: PropTypes.bool,
  customClassName: PropTypes.string
};

export default TimePicker;
