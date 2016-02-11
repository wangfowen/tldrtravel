import React, { PropTypes, Component } from 'react'

import AddButton from '../../helpers/AddButton'

class EditRoute extends Component {
  constructor() {
    super()
    this._inputs = []
  }

  saveRoute = () => {
    const content = {
      fromId: this.props.fromId,
      toId: this.props.toId
    }

    this._inputs.forEach(el => {
      const value = el.value

      if (value) {
        content[el.getAttribute("name")] = value
      }
    })

    this.props.onSave(content)
  }

  render() {
    const { name, description, price, timeSpent } = this.props

    const trackInput = (el) => { this._inputs.push(el) }

    return (
      <div>
        <p>Route: <input ref={trackInput} name="name" type="text" defaultValue={ name } /></p>
        <p>Description: <textarea ref={trackInput} name="description" defaultValue={ description } /></p>
        <p>Price: <input ref={trackInput} name="price" type="text" defaultValue={ price } /></p>
        <p>Time spent: <input ref={trackInput} name="timeSpent" type="text" defaultValue={ timeSpent } /></p>

        <AddButton onClick={ this.saveRoute } className="save">Save</AddButton>
      </div>
    )
  }
}

EditRoute.propTypes = {
  onSave: PropTypes.func.isRequired,
  fromId: PropTypes.string.isRequired,
  toId: PropTypes.string.isRequired,

  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

export default EditRoute
