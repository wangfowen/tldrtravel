import React from 'react';
import { Router, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Routes from './Routes';

const history = createBrowserHistory();

React.render(
  <Router history={history} >{Routes}</Router>,
  document.getElementById('root'));
