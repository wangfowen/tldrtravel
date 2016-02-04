import React, {Component} from 'react';

import {RP, getId} from "../common.js"
import {Text, ViewText, EditText} from "./Text.js"
import {Day, AddDay, ViewDay, EditDay} from "./Day.js"
import {Event, ViewEvent, EditEvent} from "./Event.js"
import "../../css/main.scss";

/**
 * Trip: {title, numDays, [Item]}
 * Item: (Day | Text)
 * Day: {Date, [(Location | Route)]}
 * Date: {string} => auto-populates with numDays. in edit mode also has calendar for date-picking if want
 * Text: {content}
 * Location: (General) => eventually will be other types of Locations - restaurant, nature, museum, shopping, etc
 * General: {geolocation, imageUrl, price, timeSpent, description}
 * Route: {(Other), [locationId, locationId]} => eventually will be walking, biking, plane, train, ferry, bus, etc
 * Other: {price, timeSpent}
 */

const TypeToComponent = {
  Text: [ViewText, EditText],
  Day: [ViewDay, EditDay],
  Event: [ViewEvent, EditEvent]
}

class Trip {
  static makeDefault() {
    return {
      title: "My Adventure",
      numDays: 0,
      items: [Text.makeDefault()]
    };
  }
}

export default class CreateTrip extends Component {
  state = {
    trip: localStorage.draftTrip && JSON.parse(localStorage.draftTrip) || Trip.makeDefault(),
    editedId: null
  }

  saveTrip(state) {
    this.setState(state, () => {
      localStorage.setItem("draftTrip", JSON.stringify(this.state.trip));
    });
  }

  renderItem = (item) => {
    const {editedId} = this.state;

    //for each component, render the edit version if it's the currently edited one
    const ComponentClass = TypeToComponent[item.type][item.id === editedId ? 1 : 0];

    //TODO: this is not scalable
    return (
      <ComponentClass
        key={item.id}
        setEditedId={this.setEditedId}
        setContent={this.setContent}
        items={item.items}
        dayNum={item.dayNum}
        renderItem={this.renderItem}
        addEvent={this.addEvent}
        {...item} />
    );
  }

  render() {
    const {trip} = this.state;

    return (
      <div>
        <h1>{trip.title}</h1>
        {trip.items.map(item => this.renderItem(item))}
        <AddDay addDay={this.addDay} />
     </div>
    );
  }

  setEditedId = (id) => {
    this.setState({editedId: id});
  }

  setContent = (id, content) => {
    const {trip} = this.state;

    const updatedItem = function(item) {
      if (item.type === Text.type) {
        return {
          ...item,
          content: item.id === id ? content : item.content
        }
      } else if (item.type === Day.type) {
        return {
          ...item,
          items: item.items.map(i => updatedItem(i))
        }
      }
    }

    const state = {
      trip: {
        ...trip,
        items: trip.items.map(item => updatedItem(item))
      }
    };

    this.saveTrip(state);
  }

  addDay = () => {
    const {trip} = this.state;
    const newNumDays = trip.numDays + 1;

    const state = {
      trip: {
        ...trip,
        items: [...trip.items, Day.makeDefault(newNumDays)],
        numDays: newNumDays
      }
    };

    this.saveTrip(state);
  }

  addEvent = (dayNum) => {
    const {trip} = this.state;

    const state = {
      trip: {
        ...trip,
        items: trip.items.map(i => {
          if (i.dayNum === dayNum) {
            var newItem = i;
            newItem.items = [...i.items, Event.makeDefault()];
            return newItem;
          } else { return i }
        })
      }
    };

    this.saveTrip(state);
  }
}
