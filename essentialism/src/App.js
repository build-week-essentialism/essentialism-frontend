import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import DashBoard from "./Components/Auth/DashBoard";
import NewValues from './Components/Values/NewValues';
import Values from './Components/Values/Values';
import NewProject from './Components/Projects/NewProject';
import Projects from './Components/Projects/Projects';

import { connect } from "react-redux";

const Home = props => {
  return(
    <div>
      <h1>Welcome to the Essentialism App</h1>
    </div>
  )
  
}
class App extends Component {
  state = {
    projects: '',
    values: '',
    user: ''
  }



  render() {
    return (
      <Router>
        <div className="App">
        
          <Header/>
          <div>
            <Route path="/login" render={props => (<Login {...props}/>)} />
            <Route path="/register" render={props => (<Register {...props}/>)} />
          
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={DashBoard} />
            <PrivateRoute exact path="/new-values" component={NewValues}/>
            <PrivateRoute exact path="/my-values" component={Values}/>
            <PrivateRoute exact path="/new-project" component={NewProject} />
            <PrivateRoute exact path="/my-projects" component={Projects}/>
          </div>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);