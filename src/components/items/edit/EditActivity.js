import React, { PropTypes, Component } from 'react'

import AddButton from '../../helpers/AddButton'

class EditActivity extends Component {
  constructor() {
    super()
    this._inputs = []
  }

  saveActivity = () => {
    const content = {};
    this._inputs.forEach(el => {
      const value = el.value

      if (value) {
        content[el.getAttribute("name")] = value
      }
    })

    this.props.onSave(content)
  }

  render() {
    const { name, geolocation, imageUrl, description, price, timeSpent } = this.props

    const trackInput = (el) => { this._inputs.push(el) }

    return (
      <div>
        <p>Activity: <input ref={trackInput} name="name" type="text" defaultValue={ name } /></p>
        <p>Location: <input ref={trackInput} name="geolocation" type="text" defaultValue={ geolocation } /></p>
        <p>Image URL: <input ref={trackInput} name="imageUrl" type="text" defaultValue={ imageUrl } /></p>
        <p>Description: <textarea ref={trackInput} name="description" defaultValue={ description } /></p>
        <p>Price: <input ref={trackInput} name="price" type="text" defaultValue={ price } /></p>
        <p>Time spent: <input ref={trackInput} name="timeSpent" type="text" defaultValue={ timeSpent } /></p>

        <AddButton onClick={ this.saveActivity } className="save">Save</AddButton>
      </div>
    )
  }
}

EditActivity.propTypes = {
  onSave: PropTypes.func.isRequired,

  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default EditActivity
