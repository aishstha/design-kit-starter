import codeStyle from './CodeEditorStyle';
import 'assets/css/code_editor.css';

import React from 'react';
import yaml from 'js-yaml';
import Prism from 'prismjs';
import Draft from 'draft-js';
import { PropTypes } from 'prop-types';
import 'prismjs/components/prism-json';
import PrismDecorator from 'draft-js-prism';

import Line from './Line';
import prismDSLRegex from './PrismDSLRegex';
Prism.languages.dsl = prismDSLRegex;

const allowedLanguages = ['dsl', 'json'];
const { ContentState, Editor, EditorState, convertToRaw, Modifier } = Draft;

class CodeEditor extends React.Component {
  constructor(props) {
    super();
    let { language } = props;

    if (!allowedLanguages.includes(language)) throw new Error(language + ' is not a valid language');

    const prismDecorator = new PrismDecorator({
      // Pass Prism Instance
      prism: Prism,
      // Filter is used to apply highlighting to selective code block
      filter: () => true,
      // Default syntax is javascript in Prism but overriding anyways
      defaultSyntax: String(language),
      // Used to pass the syntax. It doesn't work if the language hasn't been imported
      getSyntax: () => String(language)
    });

    this.state = {
      // Use createWithContent to create an immutable EditorState
      editorState: EditorState.createWithContent(ContentState.createFromText(props.code), prismDecorator),
      syntaxError: '',
      placeholder: null
    };
  }

  handleClick = () => {
    this.editor.focus();
  };

  handleTab = e => {
    e.preventDefault();
    const tabCharacter = '    ';

    let currentState = this.state.editorState;
    let newContentState = Modifier.replaceText(
      currentState.getCurrentContent(),
      currentState.getSelection(),
      tabCharacter
    );

    this.setState({
      editorState: EditorState.push(currentState, newContentState, 'insert-characters')
    });
  };

  handleOnBlur = () => {
    this.editor.blur();
    this.setPlaceholder();
  };

  setPlaceholder = () => {
    const { placeholder } = this.props;

    placeholder && this.setState({ placeholder });
  };

  handleEditorChange = editorState => {
    const contentState = editorState.getCurrentContent();
    const rawData = convertToRaw(contentState)
      .blocks.map(el => el.text)
      .join('\n');

    if (this.props.language === 'dsl') {
      try {
        this.props.setDSLSyntaxError(false);
        this.setState({ syntaxError: '' });
        yaml.safeLoadAll(rawData);
      } catch (error) {
        this.setState({ syntaxError: error.message }, () => this.props.setDSLSyntaxError(true));
      }
    }
    this.setState({ editorState }, () => this.props.updateEditorCode(rawData));
  };

  componentDidMount() {
    this.setPlaceholder();
  }

  render() {
    return (
      <div
        style={codeStyle.root}
        className={`form-group ${this.props.hasErrorMessage || this.state.syntaxError ? 'has-error' : ''}`}
      >
        <label className="form-group__label form-group__label--block">{this.props.label}</label>
        <div className="form-group__note">{this.state.placeholder}</div>
        <div style={codeStyle.editor} onClick={this.handleClick} className="Editor" onBlur={this.handleOnBlur}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorChange}
            ref={ref => (this.editor = ref)}
            stripPastedStyles
            blockRendererFn={() => ({ component: Line })}
            onTab={this.handleTab}
            className="form-group__control"
          />
        </div>
        {this.props.hasErrorMessage && (
          <span className="form-group__validation-true mt-5 d-block">{this.props.errorMessage}</span>
        )}
        {this.state.syntaxError && (
          <pre className="form-group__validation-true mt-5 d-block">{this.state.syntaxError}</pre>
        )}
      </div>
    );
  }
}

CodeEditor.propTypes = {
  label: PropTypes.string,
  language: PropTypes.string,
  code: PropTypes.string,
  placeholder: PropTypes.string,
  updateEditorCode: PropTypes.func.isRequired,
  hasErrorMessage: PropTypes.bool,
  errorMessage: PropTypes.string,
  setDSLSyntaxError: PropTypes.func
};

CodeEditor.defaultProps = {
  language: 'dsl',
  code: '',
  placeholder: 'Write here ..',
  hasErrorMessage: false,
  errorMessage: ''
};

export default CodeEditor;
