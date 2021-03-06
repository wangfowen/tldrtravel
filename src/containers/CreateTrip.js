import { connect } from 'react-redux'

import Trip from '../components/Trip'
import { Mode } from '../common.js'
import { setEditId, toggleMode, reset } from '../actions'

const mapStateToProps = (state) => {
  return {
    checked: state.meta.tripMode === Mode.View,
    mode: state.meta.tripMode,
    onSaveClick: () => {
      //TODO: once we have auth, set the state for the correct user
      firebase.database().ref("test").set(state);
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBodyClick: (ev) => {
      if (ev.target === ev.currentTarget) {
        dispatch(setEditId(null))
      }
    },
    onClearClick: () => { dispatch(reset()) },
    onChange: () => { dispatch(toggleMode()) }
  }
}

const CreateTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)

export default CreateTrip
