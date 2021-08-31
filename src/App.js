import React from 'react';
import {Route} from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss'

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}></Route>
    </div>
  );
}

export default App;
