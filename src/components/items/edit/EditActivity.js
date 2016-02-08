import React, { PropTypes, Component } from 'react'

class EditActivity extends Component {
  render() {
    const { name, geolocation, imageUrl, description, price, timeSpent, onChange } = this.props
    //TODO: use onChange - how can easily capture changes here and convert to an object?
    return (
      <div>
        <p>Activity: <input type="text" value={ name } /></p>
        <p>Location: <input type="text" value={ geolocation } /></p>
        <p>Image URL: <input type="text" value={ imageUrl } /></p>
        <p>Description: <input type="text" value={ description } /></p>
        <p>Price: <input type="text" value={ price } /></p>
        <p>Time spent: <input type="text" value={ timeSpent } /></p>
      </div>
    )
  }
}

EditActivity.propTypes = {
  onChange: PropTypes.func,

  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default EditActivity
