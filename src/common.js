let nextItemId = 0

//TODO: make this work properly
export const getId = () => {
  return Math.random()
};

export const Mode = {
  Edit: "EDIT",
  View: "VIEW"
}

export const Action = {
  EditText: "EDIT_TEXT",
  SetMode: "SET_MODE",
  SetEditId: "SET_EDIT_ID"
}
