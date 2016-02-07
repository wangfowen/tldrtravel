import React, { PropTypes } from 'react'

import { mapItems } from '../../../common'
import Text from '../../../containers/items/Text'

const ViewDay = ({ id, items, dayNum, description }) => {
  return (
      <div>
        <p>Day {dayNum}</p>
        <Text content={ description } id={ id } />
        { mapItems(items) }
      </div>
  );
}

ViewDay.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  dayNum: PropTypes.number.isRequired,
  description: PropTypes.string
}

export default ViewDay
