import { Action } from '../common'

export const editText = (id, text) => {
  return {
    type: Action.EditText,
    id,
    text
  }
}

export const setMode = (mode) => {
  return {
    type: Action.SetMode,
    mode
  }
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

export const addActivity = () => {
  return { type: Action.AddActivity }
}
