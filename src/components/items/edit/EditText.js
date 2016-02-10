import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

export default class EditText extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.text).focus();
  }

  render() {
    const {content, onChange, onBlur} = this.props

    //TODO: how allow new lines?
    return (
      <textarea ref="text"
        value={content}
        onChange={(ev) => onChange(ev.target.value)}
        onBlur={() => onBlur()}
      />
    )
  }
}

EditText.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  content: PropTypes.string
}

