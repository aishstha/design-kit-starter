import React from 'react';
import AceEditor from 'react-ace';

const CodeLibraryKit = () => {
  let template = `<div className="Card Card--code-library d-flex justify-content-between align-items-start">
    <div className="d-flex flex-1 align-items-start">
        <div className="Card__title-icon">
            <i className="ed-code-download"></i>
        </div>
        <div className="Card__title-size d-flex flex-column">
            <h6 className="Card__title-size__title">
                c_zipcode.py
            </h6>
            <p className="Card__title-size__size">342 kb</p>
        </div>
    </div>
    <div className="Card__action">
        <a href={null}><i className="ed-code"></i></a>
        <a href={null}><i className="ed-cloud-upload"></i></a>
        <a href={null}><i className="ed-trash"></i></a>
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

export default CodeLibraryKit;
