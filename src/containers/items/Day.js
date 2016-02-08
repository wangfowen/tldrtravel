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
        <div className="day">
          <EditDay {...this.props} />
        </div>
      )
    } else {
      return (
        <div className="day">
          <ViewDay {...this.props} />
        </div>
      )
    }
  }
}

Day.propTypes = {
  id: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  addActivity: PropTypes.func.isRequired,
  addRoute: PropTypes.func.isRequired,

  items: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
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
