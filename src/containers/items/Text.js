import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Mode, getId, nodeMode } from '../../common'
import { editText, setEditId } from '../../actions'
import ViewText from '../../components/items/view/ViewText'
import EditText from '../../components/items/edit/EditText'

class Text extends Component {
  //if an itemId isn't passed to it, auto-assign one
  //TODO: why does this alway return the same thing?
  static defaultProps = {
    itemId: getId()
  }

  render() {
    const { tripMode, onViewClick, onEditChange, onEditBlur, content, itemId } = this.props

    if (nodeMode() === Mode.Edit) {
      return (
        <EditText
          onChange={(text) => onEditChange(itemId, text)}
          onBlur={() => onEditBlur()}
          key={ itemId }
          content={ content }
        />
      )
    //in view mode don't display anything if there's no content set
    } else if (tripMode === Mode.View && content === undefined) {
      return null
    } else {
      return (
        <ViewText
          id={ itemId }
          onClick={() => onViewClick(itemId)}
          key={ itemId }
          content={ content || "Add an optional description here"}
        />
      )
    }
  }
}

Text.propTypes = {
  itemId: PropTypes.string.isRequired,
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
