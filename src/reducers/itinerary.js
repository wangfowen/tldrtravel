import { Action, AType, RType, getId } from '../common'

/*
 category: category within that type
 id: identifier for the item
*/
const activity = (state, action) => {
  switch (action.type) {
    case Action.EditActivity:
      if (action.id === state.id) {
        return {...action.content,
          id: state.id,
          category: state.category
        }
      } else return state
    default:
      return state
  }
}

const route = (state, action) => {
  switch (action.type) {
    case Action.EditRoute:
      if (action.id === state.id) {
        return {...action.content,
          id: state.id,
          category: state.category
        }
      } else return state
    default:
      return state
  }
}

/*
  id: identifier for the day
  activities: array of activities
  routes: map of {fromId,toId}=>route
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
          activities: state.activities.map(a => activity(a, action)),
          routes: state.routes.map(r => route(r, action))
        }
      }
    case Action.AddActivity:
      return {...state,
        activities: [...state.activities, {
          id: getId(),
          category: AType.Other
        }]
      }
    case Action.AddRoute:
      return {...state,
        routes: [...state.routes, {
          id: getId(),
          category: RType.Other,
          fromId: action.fromId,
          toId: action.toId
        }]
      }
    case Action.DeleteActivity:
      return {...state,
        activities: state.activities.filter(r => r.id !== action.id),
        routes: state.routes.filter(r => r.fromId !== action.id && r.toId !== action.id)
      }
    case Action.DeleteRoute:
      return {...state,
        routes: state.routes.filter(r => r.id !== action.id)
      }
    default:
      return {...state,
        activities: state.activities.map(a => activity(a, action)),
        routes: state.routes.map(r => route(r, action))
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
          id: "day-" + (state.days.length + 1),
          dayNum: state.days.length + 1,
          activities: [],
          routes: []
        }]
      }
    case Action.AddActivity:
      return {...state,
        days: state.days.map(d => {
          return action.dayId === d.id ? day(d, action) : d
        })
      }
    case Action.AddRoute:
      return {...state,
        days: state.days.map(d => {
          return action.dayId === d.id ? day(d, action) : d
        })
      }
    case Action.Reset:
      return {
        days: []
      }
    default:
      return {...state,
        days: state.days.map(d => day(d, action))
      }
  }
}

export default itinerary
