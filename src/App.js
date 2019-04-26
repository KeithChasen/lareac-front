import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import UsersList from './components/users/UsersList'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={UsersList}/>
            <Route />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
