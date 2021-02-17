import React, { Component } from 'react';

import moment from 'moment';
import { PropTypes } from 'prop-types';

import DropDown from '../DropDown';
import TextField from '../TextField';
import TimePicker from '../TimePicker';
import EveryDayList from './EveryDayList';
import DateList from 'components/common/cron-builder/DateList';

import { cronBuilder, readableCron } from 'utils/cronBuilder';
import { isCronValid, parseCron, isDaily, isWeekly, isMonthly } from 'utils/cronParser';

import { dayMonthOptions, INTERVAL, cronResultStyles } from 'constants/cronBuilderConstants';

class CronExpressionBuilder extends Component {
  constructor(props) {
    super(props);

    const cron = props.initialCronExp;
    const datePickerState = this.getDatePickerState(cron);

    this.state = {
      ...datePickerState,
      cronExpResult: cron,
      isAdvancedSelected: false,
      manualCronExp: '',
      isTimePickerOpen: false,
      isDevMode: process.env.NODE_ENV === 'development' ? true : false
    };
  }

  getDatePickerState = cron => {
    let datePickerState = {
      dayMonthSelection: null,
      month: null,
      time: '11:00',
      date: '',
      dayOfTheMonth: null,
      days: new Set()
    };

    if (isCronValid(cron)) {
      const cronData = parseCron(cron);

      const { minute, hour, day, dayOfWeek } = cronData;

      // set time picker
      if (minute && hour) {
        datePickerState = {
          ...datePickerState,
          ...{ time: `${hour}:${minute}` }
        };
      }

      if (isDaily(cronData)) {
        datePickerState = {
          ...datePickerState,
          ...{ dayMonthSelection: dayMonthOptions[0] }
        };

        return datePickerState;
      }

      if (isWeekly(cronData)) {
        const days = new Set(dayOfWeek.split(','));

        datePickerState = {
          ...datePickerState,
          ...{ days: days, dayMonthSelection: dayMonthOptions[1] }
        };

        return datePickerState;
      }

      if (isMonthly(cronData)) {
        const integerDay = parseInt(day, 10);
        const dayOfMonth = {
          id: integerDay,
          value: integerDay,
          label: integerDay
        };

        datePickerState = {
          ...datePickerState,
          ...{
            dayOfTheMonth: dayOfMonth,
            dayMonthSelection: dayMonthOptions[2]
          }
        };

        return datePickerState;
      }
    }

    return datePickerState;
  };

  handleAdvancedSection = () => {
    this.setState({ isAdvancedSelected: !this.state.isAdvancedSelected });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  onTimeChange = value => {
    this.setState(
      {
        time: value.format('H:mm')
      },
      () => this.generateCron()
    );
  };

  openTimePicker = () => {
    this.setState({
      isTimePickerOpen: !this.state.isTimePickerOpen
    });
  };

  setOpen = ({ isTimePickerOpen }) => {
    this.setState({
      isTimePickerOpen
    });
  };

  handleDropdown = key => value => {
    this.addToState(key, value);
    /**
     * Clear previous states when re selected dropdown
     * value is an object
     */
    switch (value.value) {
      case INTERVAL.DAILY:
        this.setState(
          {
            days: new Set(),
            month: null,
            dayOfTheMonth: null,
            isAdvancedSelected: false
          },
          () => this.generateCron()
        );
        break;
      case INTERVAL.WEEK:
        this.setState(
          {
            date: '',
            month: null,
            dayOfTheMonth: null,
            isAdvancedSelected: false
          },
          () => this.generateCron()
        );
        break;
      case INTERVAL.MONTH:
        this.setState(
          {
            date: '',
            days: new Set(),
            isAdvancedSelected: false
          },
          () => this.generateCron()
        );
        break;
      default:
        /** No default */
        break;
    }
  };

  addToState = (key, value) => {
    this.setState(
      {
        [key]: value
      },
      () => this.generateCron()
    );
  };

  handleEveryDay = e => {
    const value = e.target.value;
    const { days } = this.state;

    if (!days.delete(value)) {
      days.add(value);
    }
    this.setState({
      days
    });
    this.generateCron();
  };

  generateCron = () => {
    const { manualCronExp, isAdvancedSelected } = this.state;

    if (isAdvancedSelected) {
      this.setState({ cronExpResult: manualCronExp }, () => this.props.updateCronExpression(this.state.cronExpResult));
    } else {
      let request = {
        dayOfTheMonth: [],
        daysOfTheWeek: [],
        month: null,
        hour: null,
        minute: null
      };
      const { time, month, date, days, dayOfTheMonth } = this.state;

      const splittedTime = time && time.split(':');

      if (splittedTime) {
        const { 0: hour, 1: minute } = splittedTime;

        request.hour = hour;
        request.minute = minute;
      }

      request.daysOfTheWeek = days;
      request.month = month && month.value;
      request.dayOfTheMonth = (dayOfTheMonth && dayOfTheMonth.value) || date;

      const cronExp = cronBuilder(request);

      this.setState({ cronExpResult: cronExp }, () => this.props.updateCronExpression(this.state.cronExpResult));
    }
  };

  render() {
    const { dayMonthSelection, isAdvancedSelected, isDevMode } = this.state;
    const [hour, minute] = this.state.time.split(':');

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12">
            <fieldset disabled={this.props.isLoading} className="pr-0 pl-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-0">
                    <label className="form-group__label form-group__label--block">Select Refresh Frequency</label>
                    <DropDown
                      isSearchable={false}
                      placeholder="Interval"
                      dropdownOptions={dayMonthOptions}
                      value={this.state.dayMonthSelection}
                      name="dayMonthSelection"
                      handleChange={this.handleDropdown('dayMonthSelection')}
                      isDisabled={this.props.isLoading}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-group__label form-group__label--block">Select Time</label>
                    <div onClick={this.openTimePicker} className="form-group__icon">
                      <TimePicker
                        name="time"
                        showSecond={false}
                        onChange={this.onTimeChange}
                        format="h:mm a"
                        defaultValue={moment()
                          .hour(parseInt(hour, 10))
                          .minute(parseInt(minute, 10))}
                        inputReadOnly={true}
                        open={this.state.isTimePickerOpen}
                        onOpen={this.setOpen}
                        onClose={this.setOpen}
                        prefixCls={'msdf-timepicker'}
                      />
                      <button className="form-icon" type="button">
                        <i className="ed-md-time" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {dayMonthSelection && dayMonthSelection.value === INTERVAL.WEEK && (
                <EveryDayList handleEveryDay={this.handleEveryDay} selectedList={this.state.days} />
              )}
              {dayMonthSelection && dayMonthSelection.value === INTERVAL.MONTH && (
                <DateList
                  value={this.state.dayOfTheMonth}
                  isLoading={this.props.isLoading}
                  handleDropdown={this.handleDropdown('dayOfTheMonth')}
                />
              )}
              {isDevMode && (
                <div className="advance-field">
                  <a onClick={this.handleAdvancedSection} className="link pb-10 d-block" href={null}>
                    Advanced Option
                  </a>

                  {isAdvancedSelected && (
                    <TextField
                      name="manualCronExp"
                      value={this.state.manualCronExp}
                      onChange={this.handleInputChange}
                      customClassName="mb-10"
                    />
                  )}
                  <button onClick={this.generateCron} type="button" className="btn btn--lg btn--green pr-35 pl-35">
                    Schedule
                  </button>
                  <div className="cron-builder__result mt-15" style={cronResultStyles}>
                    {this.state.cronExpResult}
                  </div>
                </div>
              )}
              {this.state.cronExpResult && (
                <div>
                  <h5 className="mt-5">{readableCron(this.state.cronExpResult)}</h5>
                </div>
              )}
            </fieldset>
            {this.props.hasErrorMessage ? (
              <span className="form-group__validation-true mb-15 d-block">{this.props.errorMessage}</span>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CronExpressionBuilder.defaultProps = {
  isLoading: false,
  initialCronExp: '',
  hasErrorMessage: false,
  errorMessage: '',
  time: '09:00'
};

CronExpressionBuilder.propTypes = {
  updateCronExpression: PropTypes.func,
  isLoading: PropTypes.bool,
  hasErrorMessage: PropTypes.bool,
  initialCronExp: PropTypes.string,
  errorMessage: PropTypes.string
};

export default CronExpressionBuilder;
