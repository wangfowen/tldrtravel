import React, { PropTypes } from 'react'

import EditableHeader from '../containers/EditableHeader'
import Itinerary from '../containers/Itinerary'
import ToggleButton from './helpers/ToggleButton'
import AddButton from './helpers/AddButton'
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
    <AddButton onClick={ onClearClick } className="clear-button">Clear draft</AddButton>
  </div>
)

Trip.propTypes = {
  onBodyClick: PropTypes.func,
  onClearClick: PropTypes.func,
  toggleMode: PropTypes.func
}

export default Trip
