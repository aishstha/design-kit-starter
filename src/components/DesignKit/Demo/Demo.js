import React from 'react';
import Header from 'components/common/Header/header';
import TitleOptionRow from './TitleOptionRow';
import LeftMenu from './LeftMenu';
import classnames from 'classnames';
import RightMenu from './RightMenu';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftMenuOpen: false,
      isRightMenuOpen: false,
      which: 'left'
    };
  }

  toggleMenu = menupos => {
    this.setState({
      isLeftMenuOpen: menupos.isLeftMenuOpen || false,
      isRightMenuOpen: menupos.isRightMenuOpen || false
    });
  };

  render() {
    return (
      <div className="demo-wrap">
        <LeftMenu menuState={this.state.isLeftMenuOpen} toggleMenu={this.toggleMenu} />
        <RightMenu menuState={this.state.isRightMenuOpen} toggleMenu={this.toggleMenu} />
        <Header />
        <div className="container-fluid mt-25">
          <div className="Option-row">
            <TitleOptionRow toggleMenu={this.toggleMenu} />
          </div>
          <div
            className={classnames('backdrop', { active: this.state.isLeftMenuOpen || this.state.isRightMenuOpen })}
            onClick={() => this.toggleMenu({ isLeftMenuOpen: false, isRightMenuOpen: false })}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
