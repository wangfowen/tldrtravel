import React, { PropTypes } from 'react'

const AddButton = ({ onClick, children, className }) => (
  <button className={ className } onClick={ onClick }>
    { children }
  </button>
)

AddButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default AddButton
