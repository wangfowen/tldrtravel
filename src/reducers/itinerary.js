import { Action } from '../common'

/*
 type: type of item
*/
const items = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

/*
  id: identifier for the day
  items: array of items in the day
  dayNum: identifier for day number
  description: optional description of the day
*/
const day = (state, action) => {
  switch (action.type) {
    case Action.EditText:
      if (action.id === state.id) {
        return {...state,
          description: action.text
        }
      } else {
        return {...state,
          items: state.items.map(i => item(i, action))
        }
      }
    default:
      return state
  }

}

const days = (state, action) => {
  switch (action.type) {
    case Action.AddDay:
      return [...state, {
          id: "day-" + state.length + 1,
          dayNum: state.length + 1,
          items: []
        }]
    case Action.EditText:
      return state.map(d => day(d, action))
    default:
      return state
  }
}

/*
  days: array of days
*/
const itinerary = (state = {
  days: []
}, action) => {

  switch (action.type) {
    default:
      return {...state,
        days: days(state.days, action)
      }
  }
}

export default itinerary
