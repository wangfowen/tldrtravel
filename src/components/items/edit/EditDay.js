import React, { PropTypes, Component } from 'react'

import { mapItems } from '../../../common'
import Text from '../../../containers/items/Text'

export default class EditDay extends Component {
  render() {
    const { id, items, dayNum, description, addActivity, addRoute } = this.props
    const addActivityButton = <button onClick={() => addActivity(id)}>Add Activity</button>

    return (
      //TODO: allow custom date instead of just day num - with date picker
      //TODO: generate add route buttons between activities
      <div>
        <p>Day {dayNum}</p>
        <Text content={ description } id={ id } />
        { mapItems(items) }
        { addActivityButton }
      </div>
    )
  }
}

EditDay.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  addActivity: PropTypes.func.isRequired,
  addRoute: PropTypes.func.isRequired,
  description: PropTypes.string
}
