import React from 'react';

import Upload from './Upload';
import UploadKit from './UploadKit';
import CodeLibrary from './CodeLibrary';
import CodeLibraryKit from './CodeLibraryKit';

const Cards = () => {
  return (
    <div>
      <div className="row mb-20">
        <div className="col-sm-4">
          <div className="form-section mb-20">
            <h4 className="mb-15">Code Library Card</h4>
            <CodeLibrary />
          </div>
        </div>
        <div className="col-sm-8">
          <CodeLibraryKit />
        </div>
      </div>
      <div className="row mb-20">
        <div className="col-sm-4">
          <div className="form-section mb-20">
            <h4 className="mb-15">Upload Card</h4>
            <Upload />
          </div>
        </div>
        <div className="col-sm-8">
          <UploadKit />
        </div>
      </div>
    </div>
  );
};

export default Cards;
