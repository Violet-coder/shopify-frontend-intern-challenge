import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SearchPage from './react-components/SearchPage'

class App extends React.Component{
  render(){
    return(
      <div>
      <BrowserRouter>
        <Switch>
        <Route exact path='/' render={()=> (<SearchPage />)}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
