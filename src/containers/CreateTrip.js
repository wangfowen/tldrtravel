import { connect } from 'react-redux'

import Trip from '../components/Trip'
import { Mode } from '../common.js'
import { setEditId, toggleMode } from '../actions'

const mapStateToProps = (state) => {
  return {
    checked: state.meta.tripMode === Mode.View
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //TODO: how default to this without overriding other dispatches
    onClick: () => { /*dispatch(setEditId(null))*/ },
    onChange: () => { dispatch(toggleMode()) }
  }
}

const CreateTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)

export default CreateTrip
