import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setEditId, editActivity, deleteActivity } from '../../actions'
import { itemMode, AType, Mode } from '../../common'
import EditActivity from '../../components/items/edit/EditActivity'
import ViewActivity from '../../components/items/view/ViewActivity'

/*
 * Location: (General) => eventually will be other types of Locations - restaurant, nature, museum, shopping, etc
 * General: {geolocation, imageUrl, price, timeSpent, description}
 */

export default class Activity extends Component {
  render() {
    const { category, id, onViewClick, onEditSave, editId, tripMode } = this.props

    if (itemMode(tripMode, editId, id) === Mode.Edit) {
      switch(category) {
        case AType.Other:
          return (
            <div className="activity">
              <EditActivity {...this.props}
                onSave={(content) => onEditSave(id, content)}
              />
            </div>
          )
          break;
        default:
          return null
      }
    } else {
      switch(category) {
        case AType.Other:
          const { name, description, price, timeSpent, onViewDelete } = this.props
          const onDelete = tripMode === Mode.Edit ? () => onViewDelete(id) : null

          return (
            <div className="activity">
              <ViewActivity
                name = { name || "Sample activity" }
                description = { description || "This is the story of what went down during my trip!" }
                price = { price || 10 }
                timeSpent = { timeSpent || 3 }
                {...this.props}
                onClick={() => onViewClick(id)}
                onDelete={ onDelete }
              />
            </div>
          )
          break;
        default:
          return null
      }
    }
  }
}

Activity.propTypes = {
  id: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  onViewClick: PropTypes.func.isRequired,
  onEditSave: PropTypes.func.isRequired,
  onViewDelete: PropTypes.func.isRequired,
  editId: PropTypes.string,

  category: PropTypes.string.isRequired,
  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
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
    onViewDelete: (id) => { dispatch(deleteActivity(id)) },
    onEditSave: (id, content) => {
      dispatch(editActivity(id, content))
      dispatch(setEditId(null))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity)
