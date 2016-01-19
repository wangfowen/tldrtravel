import React from 'react';
import { Router, Link } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Routes from './Routes';

const history = createHashHistory();

React.render(
  <Router history={history} >{Routes}</Router>,
  document.getElementById('root'));
