import React, { PropTypes } from 'react'

const Button = ({ onClick, children, className }) => (
  <button className={ className } onClick={ onClick }>
    { children }
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
