import React, { PropTypes } from 'react'

const ViewRoute = ({ onClick, onDelete, name, description, price, timeSpent }) => {
  return (
    <div onClick={onClick}>
      { onDelete && <button onClick={ onDelete } className="delete-button">X</button> }
      {name && <p>{ name }</p>}
      {description && <p>{ description }</p>}
      {price && <p>Price: ${price}</p>}
      {timeSpent && <p>Time spent: { timeSpent } hours</p>}
    </div>
  );
}

ViewRoute.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,

  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default ViewRoute
