import React, {Component} from 'react';
import {markdown} from 'markdown';

import {RP, getId} from "../common.js"

export class Text {
  static type = "Text"
  static makeDefault() {
    return {
      type: this.type,
      id: getId(),
      content: "Add text here (optional)"
    }
  }
}

export class ViewText extends Component {
  static propTypes = {
    id: RP.number.isRequired,
    content: RP.string.isRequired,
    setEditedId: RP.func.isRequired,
  };

  render() {
    const {id, content, setEditedId} = this.props;

    return (
      <div onClick={() => setEditedId(id)}
        dangerouslySetInnerHTML={{__html: markdown.toHTML(content)}} />
    );
  }
}

export class EditText extends Component {
  static propTypes = {
    id: RP.number.isRequired,
    content: RP.string.isRequired,
    setContent: RP.func.isRequired,
    setEditedId: RP.func.isRequired,
  }

  componentDidMount() {
    React.findDOMNode(this.refs.text).focus();
  }

  render() {
    const {id, content, setContent, setEditedId} = this.props;

    return (
      <textarea ref="text"
       value={content}
       onChange={ev => setContent(id, ev.target.value)}
       onBlur={() => setEditedId(null)}
       />
    );
  }
}
