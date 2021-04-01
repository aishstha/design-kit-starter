import React from 'react';
import BatchKit from './BatchKit';

class Batch extends React.Component {
  render() {
    return (
      <div className="batch-container">
        <div className="batch-row mb-15">
          <h4 className="mb-10"> Regular Button </h4>
          <div className="row">
            <div className="col-md-4 mb-15">
              <span className="Batch Batch--regular Batch--icon mr-5">
                Regular <i className="ed-close Batch__icon" />
              </span>
              <span className="Batch Batch--blue Batch--icon ml-5">
                Blue <i className="ed-close Batch__icon" />
              </span>
            </div>
          </div>
          <div className="batch-kit mb-30">
            <BatchKit type={'regular'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Batch;
