import React from 'react';
import AceEditor from 'react-ace';

const UploadKit = () => {
  let template = `<div className="Card Card--upload flex-column d-flex justify-content-center align-items-center">
  <div className="Card__icon">
    <i className="ed-code-download" />
  </div>
  <div className="Card__description">Upload some files to the Code Library.</div>
  <div className="Card__sub-description">
    Drag the files here or <a href={null}>browse</a> in your computer.
  </div>
</div>`;

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
};

export default UploadKit;
