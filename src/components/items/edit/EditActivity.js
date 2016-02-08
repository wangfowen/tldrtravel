import React, { PropTypes, Component } from 'react'

class EditActivity extends Component {
  saveActivity = () => {
    let content = {}
    for (let ref in this.refs) {
      if (this.refs[ref].value !== "") {
        content[ref] = this.refs[ref].value
      }
    }

    this.props.onSave(content)
  }

  render() {
    const { name, geolocation, imageUrl, description, price, timeSpent } = this.props
    //TODO: use onChange - how can easily capture changes here and convert to an object?
    return (
      <div>
        <p>Activity: <input ref="name" type="text" defaultValue={ name } /></p>
        <p>Location: <input ref="geolocation" type="text" defaultValue={ geolocation } /></p>
        <p>Image URL: <input ref="imageUrl" type="text" defaultValue={ imageUrl } /></p>
        <p>Description: <textarea ref="description" defaultValue={ description } /></p>
        <p>Price: <input ref="price" type="text" defaultValue={ price } /></p>
        <p>Time spent: <input ref="timeSpent" type="text" defaultValue={ timeSpent } /></p>
        <button onClick={ this.saveActivity }>Save</button>
      </div>
    )
  }
}

EditActivity.propTypes = {
  onSave: PropTypes.func,

  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default EditActivity
