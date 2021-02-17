import React from 'react';
import AceEditor from 'react-ace';

class TitleKit extends React.Component {
  render() {
    const templateobj = {
      regular: `<button className="btn btn--green">Regular</button>
<button className="btn btn--blue">Regular</button>
<button className="btn btn--grey">Regular</button>
<button className="btn btn--red">Regular</button>`,
      outline: `<button className="btn btn--green--outline">Outline</button>
<button className="btn btn--blue--outline">Outline</button>
<button className="btn btn--grey--outline">Outline</button>
<button className="btn btn--red--outline">Outline</button>`,
      block: `<button className="btn btn--green btn--block">Block</button>
<button className="btn btn--blue btn--block">Block</button>
<button className="btn btn--grey btn--block">Block</button>
<button className="btn btn--red btn--block">Block</button>`,
      icon: `<button className="btn btn--blue btn--icon">Icon <i className="ed-log-in ml-5 btn__icon"></i></button>
<button className="btn btn--blue btn--icon">Icon <i className="ed-log-in ml-5 btn__icon"></i></button>
<button className="btn btn--grey btn--icon">Icon <i className="ed-log-in ml-5 btn__icon"></i></button>
<button className="btn btn--red btn--icon">Icon <i className="ed-log-in ml-5 btn__icon"></i></button>`,
      large: `<button className="btn btn--green btn--large">Large</button>
<button className="btn btn--blue btn--lg">Large</button>
<button className="btn btn--grey btn--lg">Large</button>
<button className="btn btn--red btn--lg">Large</button>`
    };

    let template;

    switch (this.props.type) {
      case 'regular':
        template = templateobj.regular;
        break;
      case 'outline':
        template = templateobj.outline;
        break;
      case 'block':
        template = templateobj.block;
        break;
      case 'icon':
        template = templateobj.icon;
        break;
      case 'large':
        template = templateobj.large;
        break;

      default:
        template = templateobj.reguar;
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
            height={'80px'}
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
