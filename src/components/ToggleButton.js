import React, { PropTypes } from 'react'

const ToggleButton = ({ checked, onChange, children, className }) => (
  <label className={ className }>
    <input
      type="checkbox"
      checked={ checked }
      onChange={() => onChange() }
    />
    { children }
  </label>
)

ToggleButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node
}

export default ToggleButton
