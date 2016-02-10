import React, { PropTypes } from 'react'

import EditableHeader from '../containers/EditableHeader'
import Itinerary from '../containers/Itinerary'
import ToggleButton from './helpers/ToggleButton'
import "../../css/main.scss";

const Trip = ({ onClick, onChange, checked, mode }) => (
  <div className={"trip " + mode.toLowerCase() } onClick={(ev) => onClick(ev) }>
    <EditableHeader />
    <Itinerary />
    <ToggleButton checked={ checked }
      className="preview-button"
      onChange={() => onChange() }>
      Preview
    </ToggleButton>
  </div>
)

Trip.propTypes = {
  onClick: PropTypes.func,
  toggleMode: PropTypes.func
}

export default Trip
