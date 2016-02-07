import 'babel-polyfill'
import React, { Component } from 'react'
import { Route } from 'react-router'

import Trip from "./components/Trip"
import Trips from "./components/Trips"

export default class App extends Component {
  render() {
    const {children} = this.props;

    //TODO: add menu to this when make one
    return (
      <div>
        {children || <Trips />}
      </div>
    )
  }
}


//TODO: when add other pages, will need to change Trip to CreateTrip
export default <Route>
  <Route path="/" component={App}>
    <Route path="create" component={Trip} />
  </Route>
</Route>;
