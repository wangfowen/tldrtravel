import React, { PropTypes, Component } from 'react'

import { organize, getId } from '../../../common'
import Text from '../../../containers/items/Text'
import AddButton from '../../helpers/AddButton'

export default class EditDay extends Component {
  render() {
    const { id, activities, routes, dayNum, description, addActivity, addRoute } = this.props

    //TODO: allow custom date instead of just day num - with date picker
    return (
      <div>
        <p>Day {dayNum}</p>
        <Text content={ description } id={ id } />
        {
          organize(activities, routes, ( from, to) => {
              return <AddButton
                key={ "button-" + from.id }
                className="add-route"
                onClick={() => addRoute(id, from.id, to.id)}
              >Add Route</AddButton>
          })
        }

        <AddButton className="add-activity" onClick={() => addActivity(id)}>Add Activity</AddButton>
      </div>
    )
  }
}

EditDay.propTypes = {
  id: PropTypes.string.isRequired,
  activities: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  addActivity: PropTypes.func.isRequired,
  addRoute: PropTypes.func.isRequired,
  description: PropTypes.string
}
