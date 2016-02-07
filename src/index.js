import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createStore } from 'redux'
import createHashHistory from 'history/lib/createHashHistory'

import Routes from './Routes';
import trip from './reducers';

const history = createHashHistory();
let store = createStore(trip);

render(
  <Provider store={store}>
    <Router history={history} >{Routes}</Router>
  </Provider>,
  document.getElementById('root')
);
