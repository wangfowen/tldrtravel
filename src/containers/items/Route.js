import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setEditId } from '../../actions'
import { getId, itemMode, RType, Mode } from '../../common'
import EditRoute from '../../components/items/edit/EditRoute'
import ViewRoute from '../../components/items/view/ViewRoute'

/**
 * Route: {(Other), [locationId, locationId]} => eventually will be walking, biking, plane, train, ferry, bus, etc
 * Other: {price, timeSpent}
 */

export default class Route extends Component {
  render() {
    const { category, id, onViewClick, editId, tripMode } = this.props

    let route
    if (itemMode(tripMode, editId, id) === Mode.Edit) {
      switch(category) {
        case RType.Other:
          //TODO: does this need key?
          route = (
            <EditRoute
            />
          )
          break;
        default:
          route = null
      }
    } else {
      switch(category) {
        case RType.Other:
          route = (
            <ViewRoute
              onClick={() => onViewClick(id)}
            />
          )
          break;
        default:
          route = null
      }
    }

    return route
  }
}

Route.propTypes = {
  id: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  onViewClick: PropTypes.func.isRequired,
  editId: PropTypes.string,

  category: PropTypes.string.isRequired,
  name: PropTypes.string,
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
    onViewClick: (id) => { dispatch(setEditId(id)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route)
