import { Action, AType, IType, getId } from '../common'

/*
 type: type of item - route, activity, etc
 category: category within that type
 id: identifier for the item
*/
const activity = (state, action) => {
  switch (action.type) {
    case Action.EditActivity:
      if (action.id === state.id) {
        return {...action.content,
          id: state.id,
          type: state.type,
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
          type: state.type,
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
          type: IType.Activity,
          category: AType.Other
        }]
      }
    case Action.AddRoute:
      //TODO: this has to go in the right spot
      return {...state,
        routes: [...state.routes, {
          id: getId(),
          type: IType.Route,
          category: AType.Other,
          fromId: action.fromId,
          toId: action.toId
        }]
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
    default:
      return {...state,
        days: state.days.map(d => day(d, action))
      }
  }
}

export default itinerary
