import React from 'react';
import { PropTypes } from 'prop-types';

import { DatePickerInput } from 'rc-datepicker';

import 'rc-datepicker/lib/style.css';

const DatePicker = props => {
  const { customClassName, name, label, onChange, value, style, ...rest } = props;

  return (
    <React.Fragment>
      <label className="form-group__label form-group__label--block">{label}</label>

      <DatePickerInput
        name={name}
        className={`form-group__control ${customClassName}`}
        onChange={onChange}
        value={value}
        style={style}
        {...rest}
      />
    </React.Fragment>
  );
};

DatePicker.defaultProps = {
  label: '',
  name: '',
  onChange: () => {},
  value: '',
  customClassName: '',
  style: {}
};

DatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  style: PropTypes.object,
  onChange: PropTypes.func,
  customClassName: PropTypes.string
};

export default DatePicker;
