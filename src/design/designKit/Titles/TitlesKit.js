import React from 'react';
import AceEditor from 'react-ace';

class TitleKit extends React.Component {
  render() {
    let template = `<h3 className="page-title mb-10">
  Page Title
  //mb-10 class is just for margin
</h3>

<h3 className="page-title page-title--bordered mb-15">
  Page Title bordered
  //mb-15 class is just for margin
</h3>

<h3 className="page-title page-title--small mb-10">
  Page Title Small
  //mb-10 class is just for margin
</h3>

<h3 className="page-title page-title--small page-title--bordered">
  Page Title Small bordered
</h3>`;

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

export default TitleKit;
