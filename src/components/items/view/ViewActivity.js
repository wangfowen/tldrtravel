import React, { PropTypes } from 'react'

const ViewActivity = ({ onClick, name, geolocation, imageUrl, description, price, timeSpent }) => {
  return (
    <div onClick={onClick}>
      {name && <p>{ name }</p>}
      {geolocation && <p>{ geolocation }</p>}
      {imageUrl && <img src={ imageUrl } />}
      {description && <p>{ description }</p>}
      {price && <p>Price: ${price}</p>}
      {timeSpent && <p>Time spent: { timeSpent } hours</p>}
    </div>
  );
}

ViewActivity.propTypes = {
  onClick: PropTypes.func.isRequired,

  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default ViewActivity
