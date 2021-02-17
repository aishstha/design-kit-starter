import React from 'react';
import { PropTypes } from 'prop-types';
import { RadioGroup, Radio } from 'react-radio-group';

const AwesomeRadioButton = props => {
  const { name, disabled, selectedValue, size, onChange, radios, customClassName, ...rest } = props;

  return (
    <RadioGroup name={name} selectedValue={selectedValue} onChange={onChange} {...rest}>
      <div className={`d-flex freq-checkbox ${size}`}>
        {radios.map(element => {
          return (
            <div key={element.id} className={`form-group d-flex align-items-center mr-35 ${customClassName}`}>
              <Radio
                disabled={disabled}
                value={element.value}
                className="form-group__radio mr-10"
                id={element.id}
                defaultChecked={element.defaultChecked}
              />
              <label className="form-group__label form-group__label--nomargin" htmlFor={element.id}>
                {element.label}
              </label>
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};

AwesomeRadioButton.defaultProps = {
  customClassName: '',
  disabled: false,
  size: ''
};

AwesomeRadioButton.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  radios: PropTypes.array,
  customClassName: PropTypes.string,
  disabled: PropTypes.bool
};

export default AwesomeRadioButton;
