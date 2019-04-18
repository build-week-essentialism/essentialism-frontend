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
  state = {
    projects: '',
    values: '',
    user: ''
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }


  handleChange = e => {
    this.setState({
      projects: { ...this.state.projects},
      values: { ...this.state.values},
      user: { ...this.state.user},
    });
  };

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

          <Route path="/login" render={props => (<Login {...props}/>)} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/new-values" component={NewValues}/>
          <PrivateRoute exact path="/my-values" component={Values}/>
          <PrivateRoute exact path="/new-project" component={NewProject} />
          <PrivateRoute exact path="/my-projects" component={Projects}/>
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