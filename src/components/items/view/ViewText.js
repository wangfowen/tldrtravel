import React, { PropTypes } from 'react'
import {markdown} from 'markdown';

const ViewText = ({id, onClick, content}) => {
  return (
    <div className={ id + " text" }
      onClick={() => onClick()}
      dangerouslySetInnerHTML={{__html: markdown.toHTML(content)}} />
  );
}

ViewText.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string
}

export default ViewText
