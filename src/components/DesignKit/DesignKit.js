import React from 'react';
import Header from './Header/header';
import Titles from './Titles/Titles';
import Form from './Form/Form';
import Cards from './Cards';
import ContextMenuWrap from './ContextMenu/ContextMenu';
import Button from './Button/Button';
import Batch from './Batch/Batch';

// This import ensures color in ace code editior 
import 'brace/mode/html';
import 'brace/theme/tomorrow';

class DesignKit extends React.Component {
  render() {
    return (
      <div className="design-kit-container container">
        <div className="design-kit">
          <h2>Design Kit</h2>
        </div>

        {/* Header Kit */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>1. Header</h3>
          </div>
          <Header />
        </div>
        {/* Header Kit */}

        {/* Title Kit */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>2. Titles</h3>
          </div>
          <Titles />
        </div>
        {/* Title Kit */}

        {/* Form Kit */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>3. Form Elements</h3>
          </div>
          <Form />
        </div>
        {/* Form Kit */}

        {/* Button Kit */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>4. Buttons</h3>
          </div>
          <Button />
        </div>
        {/* Button Kit */}

        {/* Button Kit */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>5. Batch</h3>
          </div>
          <Batch />
        </div>
        {/* Button Kit */}

        {/* Cards Kit */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>6. Cards </h3>
          </div>
          <Cards />
        </div>
        {/* Cards Kit */}

        {/* Context Menu */}
        <div className="kit-block">
          <div className="kit-title">
            <h3>7. Context Menu</h3>
          </div>
          <ContextMenuWrap />
        </div>
        {/* Context Menu */}
      </div>
    );
  }
}

export default DesignKit;
