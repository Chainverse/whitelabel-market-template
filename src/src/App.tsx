import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '@assets/scss/main.scss';
import '@assets/css/main.css';

import Home from '@pages/home';
import Detail from '@pages/detail';

function App() {
  return (
    <Switch>
			<Route exact path="/" component={Home}/>
      <Route exact path="/detail" component={Detail}/>
		</Switch>
  );
}

export default App;
