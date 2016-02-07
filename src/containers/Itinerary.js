import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Day from './items/Day'
import { addDay } from '../actions'
import { Mode } from '../common'

class Itinerary extends Component {
  render() {
    const { days, tripMode, addDay } = this.props

    const dayNodes = days.map(day =>
      <Day
        key={ day.dayNum }
        id={ "day-" + day.dayNum }
        { ...day }
      />
    )

    let addDayButton = ""
    if (tripMode === Mode.Edit) {
      addDayButton = <button onClick={addDay}>Add Day</button>
    }

    return (
      <div>
        { dayNodes }
        { addDayButton }
      </div>
    )
  }
}

Itinerary.propTypes = {
  days: PropTypes.array.isRequired,
  tripMode: PropTypes.string.isRequired,
  addDay: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    days: state.itinerary.days,
    tripMode: state.meta.tripMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDay: () => { dispatch(addDay()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itinerary)
