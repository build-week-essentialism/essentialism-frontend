import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import { connect } from "react-redux";

import DashBoard from "./Components/DashBoard";

import Header from "./Components/Header/Header";

import Projects from './Components/UserData/Projects';
import Values from './Components/UserData/Values';

import Settings from './Components/Settings/Settings';
import EditValues from './Components/Settings/EditValues';
import EditProjects from './Components/Settings/EditProjects';

import NewUser from "./Components/NewUser/NewUser";
import SelectValues from "./Components/NewUser/SelectValues";
import SelectProjects from "./Components/NewUser/SelectProjects";



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
            <Route exact path="/new-user/select-projects" component={SelectProjects}/>

            <Route exact path="/values" component={Values}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/new-user/edit-values" component={EditValues}/>
            <Route exact path="/new-user/edit-projectss" component={EditProjects}/>
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