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

export const addDay = (id) => {
  return {
    type: Action.AddDay,
    id
  }
}

export const addActivity = (dayId, id) => {
  return {
    type: Action.AddActivity,
    dayId,
    id
  }
}

export const editActivity = (id, content) => {
  return {
    type: Action.EditActivity,
    id,
    content
  }
}

export const deleteActivity = (id) => {
  return {
    type: Action.DeleteActivity,
    id
  }
}

export const addRoute = (dayId, fromId, toId, id) => {
  return {
    type: Action.AddRoute,
    dayId,
    fromId,
    toId,
    id
  }
}

export const editRoute = (id, content) => {
  return {
    type: Action.EditRoute,
    id,
    content
  }
}

export const deleteRoute = (id) => {
  return {
    type: Action.DeleteRoute,
    id
  }
}
