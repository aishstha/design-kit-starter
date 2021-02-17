import React from 'react';
import { PropTypes } from 'prop-types';

const TextField = props => {
  const {
    type,
    size,
    hasErrorMessage,
    errorMessage,
    customClassName,
    label,
    value,
    placeholder,
    name,
    handleChange,
    isRequired,
    ...rest
  } = props;

  return (
    <div className={`form-group ${size} ${hasErrorMessage ? 'has-error' : ''}`}>
      <label className="form-group__label form-group__label--block">{label}</label>
      <input
        type={type}
        className={`form-group__control ${customClassName}`}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required={isRequired}
        {...rest}
      />
      {hasErrorMessage && <span className="form-group__validation-true mt-5 d-block fs12">{errorMessage}</span>}
    </div>
  );
};

TextField.defaultProps = {
  label: '',
  value: '',
  hasErrorMessage: false,
  errorMessage: '',
  type: 'text',
  placeholder: '',
  handleChange: () => {},
  isRequired: false,
  size: '',
  customClassName: ''
};

TextField.propTypes = {
  type: PropTypes.string,
  hasErrorMessage: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  size: PropTypes.string,
  customClassName: PropTypes.string,
  errorMessage: PropTypes.string
};

export default TextField;
