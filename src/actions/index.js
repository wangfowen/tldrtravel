import { Action } from '../common'

export const editText = (id, text) => {
  return {
    type: Action.EditText,
    id,
    text
  }
}

export const reset = () => {
  return { type: Action.Reset }
}

export const toggleMode = () => {
  return { type: Action.ToggleMode }
}

export const setEditId = (id) => {
  return {
    type: Action.SetEditId,
    id
  }
}

export const addDay = () => {
  return { type: Action.AddDay }
}

export const addActivity = (dayId) => {
  return {
    type: Action.AddActivity,
    dayId
  }
}

export const editActivity = (id, content) => {
  return {
    type: Action.EditActivity,
    id,
    content
  }
}

export const addRoute = (dayId, fromId, toId) => {
  return {
    type: Action.AddRoute,
    dayId,
    fromId,
    toId
  }
}

export const editRoute = (id, content) => {
  return {
    type: Action.EditRoute,
    id,
    content
  }
}
