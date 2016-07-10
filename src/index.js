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

const config = {
  apiKey: "AIzaSyDCC1Y_GRuaXYNP9nF8mmB5RVCiLxdBLoA",
  authDomain: "tldrtravel.firebaseapp.com",
  databaseURL: "https://tldrtravel.firebaseio.com",
  storageBucket: "tldrtravel.appspot.com",
};

firebase.initializeApp(config);

let store = null;

firebase.database().ref("test").once('value').then(function(snapshot) {
  store = localStorage.draftTrip ? createStore(trip, JSON.parse(localStorage.draftTrip)) : (
    snapshot.val() ? createStore(trip, snapshot.val()) : createStore(trip)
  );

  store.subscribe(() =>
    localStorage.setItem("draftTrip", JSON.stringify(store.getState())))

  render(
    <Provider store={store}>
      <Router history={history} >{Routes}</Router>
    </Provider>,
    document.getElementById('root')
  );
});

