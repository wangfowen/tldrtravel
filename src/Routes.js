import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class App extends Component {
  render() {
    const {children} = this.props;

    return <div>
      <h1>Yo yo</h1>
      <div>
        <Link to='/herp'>herp</Link>
      </div>
      <div>
        <Link to='/derp'>derp</Link>
      </div>
      {children}
    </div>;
  }
}

class Herp extends Component {
  render() {
    return <div>
      Lolwut
    </div>;
  }
}

class Derp extends Component {
  render() {
    return <div>
      Lel
    </div>;
  }
}

export default <Route>
  <Route path="/" component={App}>
    <Route path="herp" component={Herp} />
    <Route path="derp" component={Derp} />
  </Route>
</Route>;
