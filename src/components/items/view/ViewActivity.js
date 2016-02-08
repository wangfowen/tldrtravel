import React, { PropTypes } from 'react'

import Optional from '../../Optional'

const ViewActivity = ({ onClick, name, geolocation, imageUrl, description, price, timeSpent }) => {
  return (
    <div onClick={() => onClick()}>
      <Optional condition={ name !== undefined }>
        <p>{ name }</p>
      </Optional>

      <Optional condition={ geolocation !== undefined }>
        <p>{ geolocation }</p>
      </Optional>

      <Optional condition={ imageUrl !== undefined }>
        <img src={ imageUrl } />
      </Optional>

      <Optional condition={ description !== undefined }>
        <p>{ description }</p>
      </Optional>

      <Optional condition={ price !== undefined }>
        <p>Price: ${ price }</p>
      </Optional>

      <Optional condition={ timeSpent !== undefined }>
        <p>Time spent: { timeSpent } hours</p>
      </Optional>
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
