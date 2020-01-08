import React, { Component } from "react"
import {BrowserRouter as Router , Switch,  Route , Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Videodiv from './Videodiv';
import Slidediv from './Slidediv';
import Week from './Week';
import ListTemplate from './ListTemplate';
import Greeting from './Try';

class App extends Component{
  
  render()
  {
    return (
      <Router>
        <div> Menu
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/Template">List Templates</Link>
            </li>
             
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <ListTemplate />
            </Route>
            <Route path="/Template">
              <ListTemplate />
            </Route>
            <Route path="/week/:id" component={Week}>                          
            </Route> 
            <Route
              path="/greeting/:id"
              component = {Greeting}
              // render={props => <Greeting text="Hello, " {...props} />}
              />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;