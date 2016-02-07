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
