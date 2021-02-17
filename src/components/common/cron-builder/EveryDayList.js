import React from 'react';
import classnames from 'classnames';

import { days } from 'constants/cronBuilderConstants';
import { PropTypes } from 'prop-types';

const EveryDayList = props => {
  return (
    <div className="form-group">
      <label className="form-group__label form-group__label--block">Repeat Every</label>
      <div className="d-flex">
        {days.map(day => (
          <button
            key={day.value}
            value={day.value}
            type="button"
            disabled={props.isLoading}
            onClick={props.handleEveryDay}
            className={classnames('btn btn--grey--outline btn--lg mr-15 btn--blue-active', {
              active: props.selectedList.has(day.value)
            })}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};

EveryDayList.defaultProps = {
  isDisabled: false
};

EveryDayList.propTypes = {
  selectedList: PropTypes.any /* Set is not available in propTypes*/,
  isDisabled: PropTypes.bool
};

export default EveryDayList;
