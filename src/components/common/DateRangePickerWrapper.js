import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { PropTypes } from 'prop-types';

class DateRangePickerWrapper extends React.Component {
  state = {
    from: undefined,
    to: undefined
  };

  getInitialState = () => ({
    from: undefined,
    to: undefined
  });

  handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);

    this.setState(range, () => this.props.updateDateRange(range));
  };

  handleResetClick = () => {
    this.setState(this.getInitialState(), () => this.props.handleClearDate());
  };

  getBoldDates = dateValue => {
    return <span className="font-weight-bold">{dateValue.toLocaleDateString()}</span>;
  };

  componentDidMount() {
    const fromDate = new Date(this.props.from);
    const toDate = new Date(this.props.to);

    this.setState({
      from: DateUtils.isDate(fromDate) ? fromDate : undefined,
      to: DateUtils.isDate(toDate) ? toDate : undefined
    });
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return (
      <div className="RangeExample">
        <p className="range-result">
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from && to && (
            <span>
              Selected from {this.getBoldDates(from)} to {this.getBoldDates(to)}
            </span>
          )}
          {from && to && (
            <span className="link pull-right" onClick={this.handleResetClick}>
              Reset
            </span>
          )}
        </p>
        <DayPicker
          className="Selectable"
          disabledDays={{ before: new Date() }}
          numberOfMonths={2}
          month={new Date()}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        {this.props.hasErrorMessage ? (
          <span className="form-group__validation-true d-block">{this.props.errorMessage}</span>
        ) : null}
      </div>
    );
  }
}

DateRangePickerWrapper.propTypes = {
  updateDateRange: PropTypes.func,
  handleClearDate: PropTypes.func,
  from: PropTypes.any,
  to: PropTypes.any,
  hasErrorMessage: PropTypes.bool,
  errorMessage: PropTypes.string
};
export default DateRangePickerWrapper;
