import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { Router, Switch, Route } from 'react-router-dom'

import history from './history'

import Navbar from './components/layout/Navbar'

import PostList from './components/Posts/PostList'
import CreatePost from './components/Posts/CreatePost'

function App() {
  return (
      <div className="App">
          <Router history={history}>
              <div className="App">
                  <Navbar />
                  <Switch>
                      <Route exact path='/' component={PostList} />
                      <Route path='/create' component={CreatePost} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;

