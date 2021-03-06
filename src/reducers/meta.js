import { Mode, Action } from '../common'

/*
  title: title of trip,
  author: author of trip,
  tripMode: Edit or View trip,
  description: description of the trip
  editId: current node being edited
*/

const defaultMeta = {
  title: "My Adventure",
  author: "Author",
  tripMode: Mode.Edit
}

const meta = (state = defaultMeta, action) => {

  switch (action.type) {
    case Action.EditText:
      if (action.id === "title") {
        return {...state,
          title: action.text
        }
      } else if (action.id === "desc") {
        return {...state,
          description: action.text
        }
      } else return state
    case Action.SetEditId:
      return {...state,
        editId: action.id
      }
    case Action.Reset:
      return defaultMeta
    case Action.ToggleMode:
      const newTripMode = state.tripMode === Mode.Edit ? Mode.View : Mode.Edit

      return {...state,
        tripMode: newTripMode
      }
    default:
      return state
  }
}

export default meta
