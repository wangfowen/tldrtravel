
import React, { PropTypes } from 'react'

const ViewRoute = ({ onClick, name, description, price, timeSpent }) => {
  return (
    <div onClick={onClick}>
      {name && <p>{ name }</p>}
      {description && <p>{ description }</p>}
      {price && <p>Price: ${price}</p>}
      {timeSpent && <p>Time spent: { timeSpent } hours</p>}
    </div>
  );
}

ViewRoute.propTypes = {
  onClick: PropTypes.func.isRequired,

  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default ViewRoute
