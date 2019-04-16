import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from "./Components/Auth/Login";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import Home from "./Components/Auth/Home";
import NewValues from './Components/Values/NewValues';
import Values from './Components/Values/Values';
import NewProject from './Components/Projects/NewProject';
import Projects from './Components/Projects/Projects';

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/new-values"><p>Update Values</p></NavLink>
          <NavLink to="/my-values"><p>My Values</p></NavLink>
          <NavLink to="/new-project"><p>Update Project</p></NavLink>
          <NavLink to="/my-projects"><p>My Projects</p></NavLink>
            
          <Route path="/login" component={props => (<Login {...props}/>)} />
          <PrivateRoute exact path="/home" component={props => (<Home {...props}/>)} />
          <PrivateRoute exact path="/new-values" component={props => (<NewValues {...props}/>)}/> 
          <PrivateRoute exact path="/my-values" component={props => (<Values {...props}/>)}/>
          <PrivateRoute exact path="/new-project" component={props => (<NewProject {...props}/>)} />
          <PrivateRoute exact path="/my-projects" component={props => (<Projects {...props}/>)}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    values: state.values,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);