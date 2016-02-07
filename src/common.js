let nextItemId = 0

//TODO: make this work properly
export const getId = () => {
  return Math.random().toString()
};

export const nodeMode = (tripMode, editId, itemId) => {
    return (tripMode === Mode.Edit && editId === itemId) ? Mode.Edit : Mode.View
  }

export const Mode = {
  Edit: "EDIT",
  View: "VIEW"
}

export const Action = {
  EditText: "EDIT_TEXT",
  SetMode: "SET_MODE",
  SetEditId: "SET_EDIT_ID",
  AddDay: "ADD_DAY",
  AddActivity: "ADD_ACTIVITY"
}

//type of item
export const IType = {
  Activity: "ACTIVITY"
}

//type of activity
export const AType = {
  Other: "OTHER"
}

//type of route
export const RType = {
  Foot: "FOOT",
  Bike: "BIKE",
  Plane: "PLANE",
  Train: "TRAIN",
  Bus: "BUS",
  Other: "OTHER"
}
