import React from 'react';

const CodeLibraryCard = () => {
  return (
    <div className="Card Card--code-library d-flex justify-content-between align-items-start">
      <div className="d-flex flex-1 align-items-start">
        <div className="Card__title-icon">
          <i className="ed-code-download" />
        </div>
        <div className="Card__title-size d-flex flex-column">
          <h6 className="Card__title-size__title">c_zipcode.py</h6>
          <p className="Card__title-size__size">342 kb</p>
        </div>
      </div>
      <div className="Card__action">
        <a href={null}>
          <i className="ed-code" />
        </a>
        <a href={null}>
          <i className="ed-cloud-upload" />
        </a>
        <a href={null}>
          <i className="ed-trash" />
        </a>
      </div>
    </div>
  );
};

export default CodeLibraryCard;
