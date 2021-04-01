import React from 'react';
import AceEditor from 'react-ace';

class BatchKit extends React.Component {
  render() {
    const templateobj = {
      regular: `<span className="Batch Batch--regular Batch--icon mr-5">Regular <i className="ed-close Batch__icon"></i> </span>
<span className="Batch Batch--blue Batch--icon ml-5">Blue <i className="ed-close Batch__icon"></i> </span>`
    };

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
            value={templateobj.regular}
          />
        </div>
      </div>
    );
  }
}

export default BatchKit;
