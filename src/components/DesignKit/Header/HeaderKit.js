import React from 'react';
import AceEditor from 'react-ace';

class HeaderKit extends React.Component {
  render() {
    let template = `<header className="d-flex Header">
  <div className="container-fluid">
    <div className="d-flex align-items-center justify-content-between Header__row">
      <div className="Header__row__left-part d-flex align-items-center">
        <div className="Header__row__logo">
          <a href="#index">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="Nav">
          <div className="d-flex">
            <div className="Nav__menu-nodes Nav__menu-nodes--active">
              <a href="">Users</a>
            </div>
            <div className="Nav__menu-nodes">
              <a href="">Conenctions</a>
            </div>
            <div className="Nav__menu-nodes">
              <a href="">Dataviews</a>
            </div>
          </div>
        </div>
      </div>
      <div className="Header__row__right-part d-flex align-items-center">
        <div className="Header__row__user-profile">
          <img src="https://picsum.photos/40/40/?random" alt="user-image"/>
        </div>
      </div>
    </div>
  </div>
</header> `;

    return (
      <div className="kit-code">
        <div className="kit-title">
          <h3>Code</h3>
        </div>
        <div className="editor">
          <AceEditor
            mode="html"
            theme="tomorrow"
            name="blah2"
            readOnly={true}
            width={'100%'}
            height={'200px'}
            fontSize={14}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={false}
            value={template}
          />
        </div>
      </div>
    );
  }
}

export default HeaderKit;
