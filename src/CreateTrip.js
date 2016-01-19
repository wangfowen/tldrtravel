import React, {Component} from 'react';

import {RP, getId} from "./common.js"
import {Text, ViewText, EditText} from "./Text.js"
import {Day, AddDay} from "./Day.js"
import "../css/main.scss";

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
  Text: [ViewText, EditText]
}

class Trip {
  static makeDefault() {
    return {
      title: "My Adventure",
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

  renderItem(item) {
    const {editedId} = this.state;

    //days are containers of other items
    if (item.type === Day.type) {
      return <div key={item.id}>
          <p>{item.date}</p>
          {item.items.map(i => this.renderItem(i))}
        </div>
    }

    //for each component, render the edit version if it's the currently edited one
    const ComponentClass = TypeToComponent[item.type][item.id === editedId ? 1 : 0];

    return (
      <ComponentClass
        key={item.id}
        setEditedId={this.setEditedId}
        setContent={this.setContent}
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

    const state = {
      trip: {
        ...trip,
        items: trip.items.map(item => ({
          ...item,
          content: item.id === id ? content : item.content
        }))
      }, ...state
    };

    this.saveTrip(state);
  }

  addDay = () => {
    const {trip} = this.state;

    const state = {
      trip: {
        ...trip,
        items: [...trip.items, Day.makeDefault()]
      }, ...state
    };

    this.saveTrip(state);
  }
}
