import 'react-tippy/dist/tippy.css';
import React from 'react';

import { Tooltip } from 'react-tippy';

const Menu = () => (
  <div className="DropdownMenu">
    <div className="form-group d-flex align-items-center mb-10">
      <input type="checkbox" className="form-group__checkbox mr-10" id="check1" />
      <label className="form-group__label form-group__label--nomargin" htmlFor="check1">
        Notify me when complete
      </label>
    </div>
    <div className="form-group d-flex align-items-center">
      <input type="checkbox" className="form-group__checkbox mr-10" id="check" />
      <label className="form-group__label form-group__label--nomargin" htmlFor="check">
        Run All associated exports
      </label>
    </div>
  </div>
);
const ContextMenuWrap = () => {
  return (
    <div>
      <div className="row mb-20">
        <div className="col-sm-4">
          <div className="form-section mb-20">
            <div className="context-menu-container" component="div">
              <Tooltip
                trigger="click"
                html={<Menu />}
                position="bottom"
                animation="fade"
                arrow={true}
                distance={10}
                offset={-50}
                theme={'light'}
                interactive={true}
                unmountHTMLWhenHide={true}
              >
                <button>
                  <i className="ed-more" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="col-sm-8">{/* <CodeLibraryKit /> */}</div>
      </div>
    </div>
  );
};

export default ContextMenuWrap;
