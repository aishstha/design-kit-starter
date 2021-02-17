import React from 'react';

const CodeLibraryCard = () => {
  return (
    <div className="Card Card--upload flex-column d-flex justify-content-center align-items-center">
      <div className="Card__icon">
        <i className="ed-code-download" />
      </div>
      <div className="Card__description">Upload some files to the Code Library.</div>
      <div className="Card__sub-description">
        Drag the files here or <a href={null}>browse</a> in your computer.
      </div>
    </div>
  );
};

export default CodeLibraryCard;
