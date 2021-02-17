import React from 'react';
import { PropTypes } from 'prop-types';

const SliderCheckBox = props => {
  const { label, value, placeholder, name, handleChange, isRequired } = props;

  return (
    <div className="form-group">
      <label className="switch mr-15">{label}</label>
      <input
        type="checkbox"
        className="switch-btn d-flex align-items-center mb-35"
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required={isRequired}
      />
    </div>
  );
};

SliderCheckBox.defaultProps = {
  isRequired: false
};

SliderCheckBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number
};

export default SliderCheckBox;
