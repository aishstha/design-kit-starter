import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => {
  return (
    <div className={`spinner ${size}`}>
      <div className={`spinningCircle ${size}`} />
    </div>
  );
};

Spinner.defaultProps = {
  size: ''
};

Spinner.propTypes = {
  size: PropTypes.string
};

export default Spinner;
