import React, {Component} from 'react';
import { Route } from 'react-router';

import CreateTrip from "./components/CreateTrip";

class App extends Component {
  render() {
    const {children} = this.props;

    return <div>{children}</div>;
  }
}

export default <Route>
  <Route path="/" component={App}>
    <Route path="create" component={CreateTrip} />
  </Route>
</Route>;
