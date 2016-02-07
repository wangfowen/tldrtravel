import { Action, AType, IType, getId } from '../common'

/*
 type: type of item - Route or Activity
 category: category within that type
*/
const item = (state, action) => {
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
    case Action.AddActivity:
      return {...state,
        items: [...state.items, {
          id: getId(),
          type: IType.Activity,
          category: AType.Other
        }]
      }
    default:
      return {...state,
        items: state.items.map(i => item(i, action))
      }
  }
}

/*
  days: array of days
*/
const itinerary = (state = {
  days: []
}, action) => {

  switch (action.type) {
    case Action.AddDay:
      return {...state,
        days: [...state.days, {
          id: "day-" + state.days.length + 1,
          dayNum: state.days.length + 1,
          items: []
        }]
      }
    default:
      return {...state,
        days: state.days.map(d => day(d, action))
      }
  }
}

export default itinerary
