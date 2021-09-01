import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './pages/homepage/homepage.styles.scss'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
