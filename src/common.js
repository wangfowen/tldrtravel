import React from 'react'

import Activity from './containers/items/Activity'
import Route from './containers/items/Route'
import AddButton from './components/helpers/AddButton'


export const getId = () => {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r&0x3|0x8)).toString(16)
  })

  return uuid
}

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
  Reset: "RESET",
  SetEditId: "SET_EDIT_ID",
  AddDay: "ADD_DAY",
  AddActivity: "ADD_ACTIVITY",
  EditActivity: "EDIT_ACTIVITY",
  DeleteActivity: "DELETE_ACTIVITY",
  AddRoute: "ADD_ROUTE",
  EditRoute: "EDIT_ROUTE",
  DeleteRoute: "DELETE_ROUTE"
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

export const organize = (activities, routes, callback) => {
  if (activities.length === 0) { return null }

  const pairToRoute = {};
  routes.forEach(route => {
    pairToRoute[`${route.fromId},${route.toId}`] = route;
  });

  const items = [];

  for (let i = 0; i < activities.length - 1; i++) {
    const from = activities[i];
    const to = activities[i+1];

    items.push(<Activity key={ from.id } { ...from } />);

    const route = pairToRoute[`${from.id},${to.id}`];
    if (route) {
      items.push(<Route key={ route.id } { ...route } />);
    } else {
      const separator = callback && callback(from, to);
      if (separator) {
        items.push(separator);
      }
    }
  }

  const last = activities[activities.length - 1];
  items.push(<Activity key={ last.id } { ...last } />);

  return items
}
