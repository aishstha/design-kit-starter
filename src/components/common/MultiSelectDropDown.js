import React from 'react';
import Select from 'react-select';
import { PropTypes } from 'prop-types';

const MultiSelectDropDown = props => {
  let {
    value,
    handleChange,
    customClassName,
    dropdownOptions,
    placeholder,
    isSearchable,
    nameattribute,
    isRequired,
    label,
    size
  } = props;

  return (
    <div className={size}>
      <label className="form-group__label form-group__label--block">{label}</label>
      <Select
        isMulti
        value={value}
        onChange={handleChange}
        className={`form-group ${customClassName}`}
        options={dropdownOptions}
        placeholder={placeholder}
        isSearchable={isSearchable}
        name={nameattribute}
        required={isRequired}
      />
    </div>
  );
};

MultiSelectDropDown.defaultProps = {
  isRequired: false,
  isSearchable: true,
  customClassName: '',
  size: null
};

MultiSelectDropDown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  nameattribute: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  dropdownOptions: PropTypes.array,
  size: PropTypes.string,
  isSearchable: PropTypes.bool,
  customClassName: PropTypes.string
};

export default MultiSelectDropDown;
