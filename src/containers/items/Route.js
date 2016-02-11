import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setEditId, editRoute } from '../../actions'
import { itemMode, RType, Mode } from '../../common'
import EditRoute from '../../components/items/edit/EditRoute'
import ViewRoute from '../../components/items/view/ViewRoute'

/**
 * Route: {(Other), [locationId, locationId]} => eventually will be walking, biking, plane, train, ferry, bus, etc
 * Other: {price, timeSpent}
 */

export default class Route extends Component {
  render() {
    const { category, id, onEditSave, onViewClick, editId, tripMode } = this.props

    if (itemMode(tripMode, editId, id) === Mode.Edit) {
      switch(category) {
        case RType.Other:
          return (
            <div className="route">
              <EditRoute {...this.props}
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
        case RType.Other:
          const { name, description, price, timeSpent } = this.props

          return (
            <div className="route">
              <ViewRoute
                onClick={() => onViewClick(id)}
                name = { name || "Sample route" }
                description = { description || "This is the route we took" }
                price = { price || 5 }
                timeSpent = { timeSpent || 1 }
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

Route.propTypes = {
  id: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  onViewClick: PropTypes.func.isRequired,
  fromId: PropTypes.string.isRequired,
  toId: PropTypes.string.isRequired,
  editId: PropTypes.string,

  category: PropTypes.string.isRequired,
  name: PropTypes.string,
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
    onEditSave: (id, content) => {
      dispatch(editRoute(id, content))
      dispatch(setEditId(null))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route)
