import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import '@assets/scss/main.scss';

import Home from '@pages/home';

function App() {
  return (
    <Switch>
			<Route exact path="/" component={Home}/>
		</Switch>
  );
}

export default App;
