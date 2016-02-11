import React, { PropTypes } from 'react'

import EditableHeader from '../containers/EditableHeader'
import Itinerary from '../containers/Itinerary'
import ToggleButton from './helpers/ToggleButton'
import Button from './helpers/Button'
import "../../css/main.scss";

const Trip = ({ onBodyClick, onClearClick, onChange, checked, mode }) => (
  <div className={"trip " + mode.toLowerCase() } onClick={(ev) => onBodyClick(ev) }>
    <EditableHeader />
    <Itinerary />
    <ToggleButton checked={ checked }
      className="preview-button"
      onChange={() => onChange() }>
      Preview
    </ToggleButton>
    <Button onClick={ onClearClick } className="clear-button">Clear draft</Button>
  </div>
)

Trip.propTypes = {
  onBodyClick: PropTypes.func,
  onClearClick: PropTypes.func,
  toggleMode: PropTypes.func
}

export default Trip
