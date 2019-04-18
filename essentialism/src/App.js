import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import { connect } from "react-redux";

import DashBoard from "./Components/Auth/DashBoard";

import Header from "./Components/Header/Header";

import NewValues from './Components/Values/NewValues';
import Values from './Components/Values/Values';

import NewProject from './Components/Projects/NewProject';
import Projects from './Components/Projects/Projects';

import NewUser from "./Components/NewUser/NewUser";
import SelectValues from "./Components/NewUser/SelectValues";


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
            <Route exact path="/new-user" component={NewUser} />
            <Route exact path="/new-use/select-values" component={SelectValues} />
            <Route exact path="/add-values" component={NewValues}/>
            <Route exact path="/values" component={Values}/>
            <Route exact path="/new-project" component={NewProject} />
            <Route exact path="/projects" component={Projects}/>
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