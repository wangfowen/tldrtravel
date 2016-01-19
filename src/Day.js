import React, {Component} from 'react';

import {RP, getId} from "./common.js"
import {Text} from "./Text.js"

export class Day {
  static type = "Day"
  static makeDefault() {
    return {
      type: this.type,
      id: getId(),
      date: "Day 1",
      items: [Text.makeDefault()]
    }
  }
}

export class AddDay extends Component {
  static propTypes = {
    addDay: RP.func.isRequired,
  }

  render() {
    const {addDay} = this.props;

    return (
      <button onClick={() => addDay()}
      >Add Day</button>
    );
  }
}
