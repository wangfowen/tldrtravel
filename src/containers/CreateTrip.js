import { connect } from 'react-redux'

import Trip from '../components/Trip'
import { Mode } from '../common.js'
import { setEditId, toggleMode } from '../actions'

const mapStateToProps = (state) => {
  return {
    checked: state.meta.tripMode === Mode.View,
    mode: state.meta.tripMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (ev) => {
      if (ev.target === ev.currentTarget) {
        dispatch(setEditId(null))
      }
    },
    onChange: () => { dispatch(toggleMode()) }
  }
}

const CreateTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)

export default CreateTrip
