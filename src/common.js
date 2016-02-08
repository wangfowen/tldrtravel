import React from 'react'

import Activity from './containers/items/Activity'
import Route from './containers/items/Route'

let nextItemId = 0

//TODO: make this work properly such that it assigns incremental ids, starting from latest already existing
export const getId = () => {
  return Math.random().toString()
};

export const itemMode = (tripMode, editId, itemId) => {
    return (tripMode === Mode.Edit && editId === itemId) ? Mode.Edit : Mode.View
  }

export const Mode = {
  Edit: "EDIT",
  View: "VIEW"
}

export const Action = {
  EditText: "EDIT_TEXT",
  ToggleMode: "TOGGLE_MODE",
  SetEditId: "SET_EDIT_ID",
  AddDay: "ADD_DAY",
  AddActivity: "ADD_ACTIVITY",
  EditActivity: "EDIT_ACTIVITY",
  AddRoute: "ADD_ROUTE"
}

//type of item
export const IType = {
  Activity: "ACTIVITY",
  Route: "ROUTE"
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

export const mapItems = (items) => {
  return items.map(item => {
    switch (item.type) {
      case IType.Activity:
        return (<Activity key={ item.id } { ...item } />)
      case IType.Route:
        return (<Route key={ item.id } { ...item } />)
      default:
        return null
    }
  })
}
