import React, {Component} from 'react';

import {RP, getId} from "../common.js"
import {Text} from "./Text.js"

export class Day {
  static type = "Day"
  static makeDefault(numDays) {
    return {
      type: this.type,
      id: getId(),
      dayNum: numDays,
      items: [Text.makeDefault()]
    }
  }
}

export class ViewDay extends Component {
  static propTypes = {
    id: RP.number.isRequired,
    items: RP.array.isRequired,
    dayNum: RP.number.isRequired,
    renderItem: RP.func.isRequired,
    addEvent: RP.func.isRequired,
  }

  render() {
    const {items, dayNum, renderItem, addEvent} = this.props;

    //TODO: how get this button without having to have it on the view?
    return (
      <div>
        <p>Day {dayNum}</p>
        {items.map(i => renderItem(i))}
        <button onClick={() => addEvent(dayNum)}
        >Add Event</button>
      </div>
    );
  }
}

export class EditDay extends Component {
  static propTypes = {
    id: RP.number.isRequired,
    items: RP.array.isRequired,
    dayNum: RP.number.isRequired,
    renderItem: RP.func.isRequired,
    addEvent: RP.func.isRequired,
  }

  render() {
    const {items, dayNum, renderItem, addEvent} = this.props;

    return (
      <div>
        <p>Day {dayNum}</p>
        {items.map(i => renderItem(i))}
        <button onClick={() => addEvent(dayNum)}
        >Add Event</button>
      </div>
    );
  }
}

export class AddDay extends Component {
  static propTypes = {
    addDay: RP.func.isRequired
  }

  render() {
    const {addDay} = this.props;

    return (
      <button onClick={() => addDay()}
      >Add Day</button>
    );
  }
}
