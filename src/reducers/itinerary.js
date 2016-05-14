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
        activities: [...state.activities, mkActivity(action.id)]
      }
    case Action.AddRoute:
      return {...state,
        routes: [...state.routes, mkRoute(action.fromId, action.toId, action.id)]
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
export const itinerary = (state = mkItinerary(), action) => {

  switch (action.type) {
    case Action.AddDay:
      return {...state,
        days: [...state.days, mkDay(state.days.length, action.id)]
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
      return mkItinerary()
    default:
      return {...state,
        days: state.days.map(d => day(d, action))
      }
  }
}

export const mkRoute = (fromId, toId, routeId = undefined, category = undefined) => {
  return {
    id: routeId || getId(),
    category: category || RType.Other,
    fromId,
    toId
  }
}

export const mkActivity = (activityId = undefined, category = undefined) => {
  return {
    id: activityId || getId(),
    category: category || AType.Other
  }
}

export const mkDay = (numDays, dayId = undefined, activities = [], routes = [], description = "") => {
  return {
    id: dayId || getId(),
    dayNum: numDays + 1,
    activities,
    routes,
    description
  }
}

export const mkItinerary = (days = []) => {
  return { days }
}
