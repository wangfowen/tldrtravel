import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Mode, itemMode } from '../../common'
import { editText, setEditId } from '../../actions'
import ViewText from '../../components/items/view/ViewText'
import EditText from '../../components/items/edit/EditText'

//text inherits its id from its parent
class Text extends Component {
  render() {
    const { tripMode, onViewClick, onEditChange, onEditBlur, content, id, editId } = this.props

    if (itemMode(tripMode, editId, id) === Mode.Edit) {
      return (
        <EditText
          onChange={(text) => onEditChange(id, text)}
          onBlur={() => onEditBlur()}
          content={ content }
        />
      )
    //in view mode don't display anything if there's no content set
    } else if (tripMode === Mode.View && !content) {
      return null
    } else {
      return (
        <ViewText
          id={ id }
          onClick={() => onViewClick(id)}
          content={ content || "Add an optional description here"}
        />
      )
    }
  }
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  onViewClick: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  onEditBlur: PropTypes.func.isRequired,

  editId: PropTypes.string,
  content: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    tripMode: state.meta.tripMode,
    editId: state.meta.editId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewClick: (id) => { dispatch(setEditId(id)) },
    onEditChange: (id, text) => { dispatch(editText(id, text)) },
    onEditBlur: () => { dispatch(setEditId(null)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text)
