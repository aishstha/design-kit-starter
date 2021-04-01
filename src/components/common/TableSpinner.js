import React from 'react';
import Spinner from './Spinner';

const TableSpinner = props => {
  return props.loading ? (
    <div className="-loading -active">
      <div className="-loading-inner">
        <Spinner size="small" />
      </div>
    </div>
  ) : null;
};

export default TableSpinner;
