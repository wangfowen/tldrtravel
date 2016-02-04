import React, {Component} from 'react';

import {RP, getId} from "../common.js"

export class Event {
  static type = "Event"
  static makeDefault() {
    return {
      type: this.type,
      id: getId(),
    }
  }
}

//TODO: actually implement
export class ViewEvent extends Component {
  static propTypes = {
    id: RP.number.isRequired,
  }

  render() {

    return (
      <div>This is an Event</div>
    );
  }
}

//TODO: actually implement
export class EditEvent extends Component {
  static propTypes = {
    id: RP.number.isRequired,
  }

  render() {

    return (
      <div>This is an Event</div>
    );
  }
}

