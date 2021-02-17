import React from 'react';
import TitleKit from './TitlesKit';

class Titles extends React.Component {
  render() {
    return (
      <div className="kitandtitle">
        <div>
          <h3 className="page-title mb-10">Page Title</h3>

          <h3 className="page-title page-title--bordered mb-15">Page Title bordered</h3>

          <h3 className="page-title page-title--small mb-10">Page Title Small</h3>

          <h3 className="page-title page-title--small page-title--bordered">Page Title Small bordered</h3>
        </div>
        <TitleKit />
      </div>
    );
  }
}

export default Titles;
