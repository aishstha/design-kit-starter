import React from 'react';
import { PropTypes } from 'prop-types';

const TextAreaField = props => {
  const {
    label,
    customClassName,
    value,
    placeholder,
    name,
    handleChange,
    isRequired,
    hasErrorMessage,
    errorMessage,
    ...rest
  } = props;

  return (
    <div className="form-group">
      <label className="form-group__label form-group__label--block">{label}</label>
      <textarea
        className={`form-group__control ${customClassName}`}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required={isRequired}
        {...rest}
      />
      {hasErrorMessage && <span className="validation-true mb-15 d-block">{errorMessage}</span>}
    </div>
  );
};

TextAreaField.defaultProps = {
  label: '',
  value: '',
  hasErrorMessage: false,
  errorMessage: '',
  placeholder: '',
  handleChange: () => {},
  isRequired: false,
  customClassName: ''
};

TextAreaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  hasErrorMessage: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  customClassName: PropTypes.string
};

export default TextAreaField;
