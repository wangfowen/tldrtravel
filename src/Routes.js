import React, {Component} from 'react';
import { Route } from 'react-router';

import CreateTrip from "./components/CreateTrip";
import Trips from "./components/Trips";

class App extends Component {
  render() {
    const {children} = this.props;

    //TODO: add menu to this when make one
    return (
      <div>
        {children || <Trips />}
      </div>
    );
  }
}

export default <Route>
  <Route path="/" component={App}>
    <Route path="create" component={CreateTrip} />
  </Route>
</Route>;
