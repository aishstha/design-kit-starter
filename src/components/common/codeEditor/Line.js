import React from 'react';
import Draft from 'draft-js';
import { PropTypes } from 'prop-types';

const { EditorBlock } = Draft;

class Line extends React.Component {
  render() {
    const { block, contentState } = this.props;

    const lineNumber =
      contentState
        .getBlockMap()
        .toList()
        .findIndex(item => item.key === block.key) + 1;

    return (
      <div className="line" data-line-number={lineNumber}>
        <div className="line-text">
          <EditorBlock {...this.props} />
        </div>
      </div>
    );
  }
}

Line.propTypes = {
  block: PropTypes.object,
  contentState: PropTypes.object
};

export default Line;
