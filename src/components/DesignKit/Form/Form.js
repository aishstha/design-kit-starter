import React from 'react';
import FormKit from './FormKit';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="row mb-20">
          <div className="col-sm-4">
            <div className="form-section mb-20">
              <h4 className="mb-15">Simple Input</h4>
              <div className="form-group">
                <label className="form-group__label form-group__label--block">Label</label>
                <input type="text" className="form-group__control" placeholder="Some text...." />
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <FormKit type={'simple'} />
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-sm-4">
            <div className="form-section mb-20">
              <h4 className="mb-15">Input with icon</h4>
              <div className="form-group">
                <label className="form-group__label form-group__label--block">Label</label>
                <div className="form-group__icon">
                  <input type="text" className="form-group__control" placeholder="Some text...." />
                  <button className="form-icon">
                    <i className="ed-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <FormKit type={'icon'} />
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-sm-4">
            <div className="form-section mb-20">
              <h4 className="mb-15">Select</h4>
              <div className="form-group">
                <label className="form-group__label form-group__label--block">Label</label>
                <select type="text" className="form-group__control" placeholder="Select">
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <FormKit type={'select'} />
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-sm-4">
            <div className="form-section mb-20">
              <h4 className="mb-15">Radio</h4>
              <div className="d-flex">
                <div className="form-group d-flex align-items-center mr-15">
                  <input type="radio" name="ed-fi" className="form-group__radio mr-10" id="radio" />
                  <label className="form-group__label form-group__label--nomargin" htmlFor="radio">
                    Label
                  </label>
                </div>
                <div className="form-group d-flex align-items-center">
                  <input type="radio" name="ed-fi" className="form-group__radio mr-10" id="radio1" />
                  <label className="form-group__label form-group__label--nomargin" htmlFor="radio1">
                    Label 2
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <FormKit type={'radio'} />
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-sm-4">
            <div className="form-section mb-20">
              <h4 className="mb-15">Checkbox</h4>
              <div className="d-flex">
                <div className="form-group d-flex align-items-center mr-15">
                  <input type="checkbox" className="form-group__checkbox mr-10" id="checkbox" />
                  <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox">
                    Label
                  </label>
                </div>
                <div className="form-group d-flex align-items-center">
                  <input type="checkbox" className="form-group__checkbox mr-10" id="checkbox1" />
                  <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox1">
                    Label 2
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <FormKit type={'checkbox'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
