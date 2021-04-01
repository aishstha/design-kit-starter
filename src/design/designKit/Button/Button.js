import React from 'react';
import ButtonKit from './ButtonKit';

class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <div className="button-row mb-15">
          <h4 className="mb-10"> Regular Button </h4>
          <div className="row">
            <div className="col-md-12 mb-15">
              <button className="btn btn--green mr-5">Regular</button>
              <button className="btn btn--blue ml-5 mr-5">Regular</button>
              <button className="btn btn--grey ml-5 mr-5">Regular</button>
              <button className="btn btn--red ml-5 mr-5">Regular</button>
            </div>
          </div>
          <div className="button-kit mb-30">
            <ButtonKit type={'regular'} />
          </div>
        </div>
        <div className="button-row mb-15">
          <h4 className="mb-10"> Outline Button </h4>
          <div className="row">
            <div className="col-md-12 mb-15">
              <button className="btn btn--green--outline mr-5">Outline</button>
              <button className="btn btn--blue--outline ml-5 mr-5">Outline</button>
              <button className="btn btn--grey--outline ml-5 mr-5">Outline</button>
              <button className="btn btn--red--outline ml-5">Outline</button>
            </div>
          </div>
          <div className="button-kit mb-30">
            <ButtonKit type={'outline'} />
          </div>
        </div>
        <div className="button-row mb-15">
          <h4 className="mb-10"> Block Button </h4>
          <div className="row">
            <div className="col-md-6 mb-15">
              <button className="btn btn--green btn--block mb-5">Block</button>
              <button className="btn btn--blue btn--block mb-5">Block</button>
              <button className="btn btn--grey btn--block mb-5">Block</button>
              <button className="btn btn--red btn--block mb-5">Block</button>
            </div>
          </div>
          <div className="button-kit mb-30">
            <ButtonKit type={'block'} />
          </div>
        </div>
        <div className="button-row mb-15">
          <h4 className="mb-10"> Button With Icon </h4>
          <div className="row">
            <div className="col-md-12 mb-15">
              <button className="btn btn--green btn--icon mr-5">
                Icon <i className="ed-log-in ml-5 btn__icon" />
              </button>
              <button className="btn btn--blue btn--icon ml-5 mr-5">
                Icon <i className="ed-log-in ml-5 btn__icon" />
              </button>
              <button className="btn btn--grey btn--icon ml-5 mr-5">
                Icon <i className="ed-log-in ml-5 btn__icon" />
              </button>
              <button className="btn btn--red btn--icon ml-5">
                Icon <i className="ed-log-in ml-5 btn__icon" />
              </button>
            </div>
          </div>
          <div className="button-kit mb-30">
            <ButtonKit type={'icon'} />
          </div>
        </div>
        <div className="button-row mb-15">
          <h4 className="mb-10"> Large Button </h4>
          <div className="row">
            <div className="col-md-12 mb-15">
              <button className="btn btn--green btn--lg mr-5">Large</button>
              <button className="btn btn--blue btn--lg ml-5 mr-5">Large</button>
              <button className="btn btn--grey btn--lg ml-5 mr-5">Large</button>
              <button className="btn btn--red btn--lg ml-5">Large</button>
            </div>
          </div>
          <div className="button-kit mb-30">
            <ButtonKit type={'large'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
