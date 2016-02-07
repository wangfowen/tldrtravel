import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Mode } from '../../common'
import { addEvent } from '../../actions'
import Text from './Text'

class Day extends Component {
  render() {
    const { id, tripMode, dayNum, items, addEvent, description } = this.props

    let addEventButton = ""
    if (tripMode === Mode.Edit) {
      addEventButton = <button onClick={addEvent}>Add Event</button>
    }

    const itemNodes = items.map(item => <p>Item</p>)

    return (
      <div>
        <p>Day {dayNum}</p>
        <Text content={ description } itemId={ id } />
        { itemNodes }
        { addEventButton }
      </div>
    )
  }
}

Day.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  addEvent: PropTypes.func.isRequired,
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
    addEvent: () => { dispatch(addEvent()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)
