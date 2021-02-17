import React from 'react';
import AceEditor from 'react-ace';

class TitleKit extends React.Component {
  render() {
    const templateobj = {
      simple: `<div className="form-group">
  <label className="form-group__label form-group__label--block">Label</label>
  <input type="text" className="form-group__control" placeholder="Some text...."/>
</div>`,
      icon: `<div className="form-group">
  <label className="form-group__label form-group__label--block">Label</label>                
  <div className="form-group__icon">
    <input type="text" className="form-group__control" placeholder="Some text...."/>
    <button className="form-icon"><i className="ed-search"></i></button>
  </div>
</div>`,
      select: `<div className="form-group">
  <label className="form-group__label form-group__label--block">Label</label>
  <select type="text" className="form-group__control" placeholder="Select">
    <option value="">Option 1</option>
    <option value="">Option 2</option>
  </select>
</div>`,
      radio: `<div className="form-group d-flex align-items-center mr-15">
  <input type="radio" className="form-group__radio mr-10" id="checkbox" />
  <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox">
    Label
  </label>
</div>`,
      checkbox: `<div className="form-group d-flex align-items-center mr-15">
    <input type="checkbox" className="form-group__checkbox mr-10" id="checkbox" />
    <label className="form-group__label form-group__label--nomargin" htmlFor="checkbox">
      Label
    </label>
  </div>`
    };

    let template;

    switch (this.props.type) {
      case 'simple':
        template = templateobj.simple;
        break;
      case 'icon':
        template = templateobj.icon;
        break;
      case 'select':
        template = templateobj.select;
        break;
      case 'radio':
        template = templateobj.radio;
        break;
      case 'checkbox':
        template = templateobj.checkbox;
        break;

      default:
        template = templateobj.select;
        break;
    }

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
            height={'130px'}
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

export default TitleKit;
