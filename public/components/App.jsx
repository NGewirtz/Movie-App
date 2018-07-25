import React from 'react';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import { Route, HashRouter, Switch } from 'react-router-dom';

function App() {
  return(
    <HashRouter>
      <main>
        <Header/>
        <Switch>
          <Route exact path='/favorites' component={Favorites}/>
          <Route component={Home}/>
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
