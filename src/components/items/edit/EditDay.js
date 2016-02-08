import React, { PropTypes, Component } from 'react'

import { mapItems } from '../../../common'
import Text from '../../../containers/items/Text'

export default class EditDay extends Component {
  render() {
    const { id, items, dayNum, description, addActivity, addRoute } = this.props
    const addActivityButton = <button onClick={() => addActivity(id)}>Add Activity</button>

    /*
     TODO: how to generate route buttons - first store routes separately from activities

    // routes: {[key: itemId,itemId]: Route}
    const toDisplay = [items[0]];
    for (let i = 1; i < items.length; i++) {
      const left = items[i-1];
      const right = items[i];
      const route = routes[`${left.id},${right.id}`];
      if (route) {
        toDisplay.push(<RouteCopnent ..route);
      } else {
        toDisplay.push(<AddRoute>);
      }
      toDisplay.push(right);
    }
    */

    return (
      //TODO: allow custom date instead of just day num - with date picker
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
