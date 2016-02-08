import React, { Component, PropTypes } from 'react'

export default class Optional extends Component {
  render() {
    const {condition, children} = this.props

    if (condition) {
      return children
    } else return null
  }
}

Optional.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

