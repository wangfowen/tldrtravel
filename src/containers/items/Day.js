import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Mode } from '../../common'
import { addActivity, addRoute } from '../../actions'
import EditDay from '../../components/items/edit/EditDay'
import ViewDay from '../../components/items/view/ViewDay'

class Day extends Component {
  render() {
    const { tripMode } = this.props

    if (tripMode === Mode.Edit) {
      return (
        <EditDay {...this.props} />
      )
    } else {
      return (
        <ViewDay {...this.props} />
      )
    }
  }
}

Day.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  addActivity: PropTypes.func.isRequired,
  addRoute: PropTypes.func.isRequired,
  tripMode: PropTypes.string.isRequired,
  description: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    tripMode: state.meta.tripMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActivity: (dayId) => { dispatch(addActivity(dayId)) },
    addRoute: (dayId, fromId, toId) => { dispatch(addRoute(dayId, fromId, toId)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)
