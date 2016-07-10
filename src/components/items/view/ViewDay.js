import React, { PropTypes } from 'react'

import { organize, genMap } from '../../../common'
import Text from '../../../containers/items/Text'

const ViewDay = ({ id, activities, routes, dayNum, description }) => {
  return (
      <div>
        <p>Day {dayNum}</p>
        <Text content={ description } id={ id } />
        { genMap(activities) }
        { organize(activities, routes) }
      </div>
  );
}

ViewDay.propTypes = {
  id: PropTypes.string.isRequired,
  activities: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  description: PropTypes.string
}

export default ViewDay
