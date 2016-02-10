import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Day from './items/Day'
import AddButton from '../components/helpers/AddButton'
import { addDay } from '../actions'
import { Mode } from '../common'

class Itinerary extends Component {
  render() {
    const { days, tripMode, addDay } = this.props

    return (
      <div className="itinerary">
        { days.map(day => <Day key={ day.dayNum } { ...day } />) }
        { tripMode === Mode.Edit &&
          <AddButton onClick={ addDay } className="add-day">Add Day</AddButton> }
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
