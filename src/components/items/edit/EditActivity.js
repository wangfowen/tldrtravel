import React, { PropTypes, Component } from 'react'

const EditActivity = ({ name, geolocation, imageUrl, description, price, timeSpent }) => {
  return (
    <div>
      Editing activity
    </div>
  );
}

EditActivity.propTypes = {
  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default EditActivity
