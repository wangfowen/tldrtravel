import { connect } from 'react-redux'

import Header from '../components/Header'
import { Mode } from '../common.js'

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.meta.title,
    author: state.meta.author,
    description: state.meta.description
  }
}

const EditableHeader = connect(
    mapStateToProps, {}
)(Header)

export default EditableHeader
