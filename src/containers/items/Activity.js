import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setEditId, editActivity } from '../../actions'
import { getId, itemMode, AType, Mode } from '../../common'
import EditActivity from '../../components/items/edit/EditActivity'
import ViewActivity from '../../components/items/view/ViewActivity'

/*
 * Location: (General) => eventually will be other types of Locations - restaurant, nature, museum, shopping, etc
 * General: {geolocation, imageUrl, price, timeSpent, description}
 */

export default class Activity extends Component {
  render() {
    const { category, id, onViewClick, onEditChange, editId, tripMode } = this.props

    let activity
    if (itemMode(tripMode, editId, id) === Mode.Edit) {
      switch(category) {
        case AType.Other:
          //TODO: does this need key?
          activity = (
            <EditActivity {...this.props}
              onChange={(content) => onEditChange(id, content)}
            />
          )
          break;
        default:
          activity = null
      }
    } else {
      switch(category) {
        case AType.Other:
          const { name, description, price, timeSpent } = this.props

          activity = (
            <ViewActivity
              name = { name || "Sample activity" }
              description = { description || "This is the story of what went down during my trip!" }
              price = { price || 10 }
              timeSpent = { timeSpent || 3 }
              {...this.props}
              onClick={() => onViewClick(id)}
            />
          )
          break;
        default:
          activity = null
      }
    }

    return activity
  }
}

Activity.propTypes = {
  id: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  onViewClick: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
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
    onEditChange: (id, content) => { dispatch(editActivity(id, content)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity)
