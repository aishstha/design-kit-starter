import React from 'react';
import Select from 'react-select';
import { PropTypes } from 'prop-types';
import { multiValueStyles } from 'constants/dropdownConstants';

const DropDown = props => {
  const {
    label,
    value,
    hasErrorMessage,
    errorMessage,
    handleChange,
    customClassName,
    dropdownOptions,
    placeholder,
    isSearchable,
    name,
    isMulti,
    isLoading,
    isRequired,
    size,
    defaultValue,
    ...rest
  } = props;

  return (
    <div className={`form-group ${size}`}>
      <label className="form-group__label form-group__label--block">{label}</label>
      <Select
        value={value}
        isMulti={isMulti}
        onChange={handleChange}
        className={`${customClassName} ${hasErrorMessage ? 'select-error' : ''}`}
        options={dropdownOptions}
        placeholder={placeholder}
        isSearchable={isSearchable}
        isLoading={isLoading}
        name={name}
        required={isRequired}
        styles={multiValueStyles}
        isError={hasErrorMessage}
        defaultValue={defaultValue}
        {...rest}
      />
      {hasErrorMessage && <span className="form-group__validation-true mt-5 d-block">{errorMessage}</span>}
    </div>
  );
};

DropDown.defaultProps = {
  label: '',
  isMulti: false,
  placeholder: '',
  hasErrorMessage: false,
  errorMessage: '',
  isLoading: false,
  handleChange: () => {},
  isRequired: false,
  dropdownOptions: [],
  size: '',
  isSearchable: true,
  customClassName: ''
};

DropDown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any /** Multi dropdown requires array. Single requires object */,
  isMulti: PropTypes.bool,
  hasErrorMessage: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  dropdownOptions: PropTypes.array,
  size: PropTypes.string,
  isSearchable: PropTypes.bool,
  customClassName: PropTypes.string,
  errorMessage: PropTypes.string
};

export default DropDown;
