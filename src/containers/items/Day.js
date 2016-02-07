import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getId, Mode, IType } from '../../common'
import { addActivity } from '../../actions'
import Text from './Text'
import Activity from './Activity'

class Day extends Component {
  render() {
    const { id, tripMode, dayNum, items, addActivity, description } = this.props

    let addActivityButton = ""
    if (tripMode === Mode.Edit) {
      addActivityButton = <button onClick={addActivity}>Add Activity</button>
    }

    const itemNodes = items.map(item => {
      switch (item.type) {
        case IType.Activity:
          return (<Activity key={ getId() } { ...item } />)
        default:
          return null
      }
    })

    //TODO: allow custom date instead of just day num - with date picker
    //TODO: generate add route buttons between activities
    //TODO: extract this into a component?
    return (
      <div>
        <p>Day {dayNum}</p>
        <Text content={ description } itemId={ id } />
        { itemNodes }
        { addActivityButton }
      </div>
    )
  }
}

Day.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  addActivity: PropTypes.func.isRequired,
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
    addActivity: () => { dispatch(addActivity()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)
