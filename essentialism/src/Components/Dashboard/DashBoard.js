import React, { Component } from 'react';
import {DashBoardComp, Nav} from '../Styles/index';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import NewValues from '../Values/NewValues';
import Values from '../Values/Values';
import NewProject from '../Projects/NewProject';
import Projects from '../Projects/Projects';
import Home from './Home';

class DashBoard extends Component {
  render() {
    return (
      <Router>
        <DashBoardComp>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new-values">Update Values</NavLink>
            <NavLink to="/my-values">My Values</NavLink>
            <NavLink to="/new-project">Update project</NavLink>
            <NavLink to="/my-projects">My projects</NavLink>
          </Nav>
          <div>
          <Route exact path="/" component={Home} />
            <Route
            path="/new-values"
            render={props => (
              <NewValues
                {...props}
              />
            )}
            />
            <Route
            path="/my-values"
            render={props => (
              <Values
                {...props}
              />
            )}
            />
            <Route
            path="/new-project"
            render={props => (
              <NewProject
                {...props}
              />
            )}
            />
            <Route
            path="/my-projects"
            render={props => (
              <Projects
                {...props}
              />
            )}
            />
          </div>
        </DashBoardComp>
      

      </Router>
    );
  }
}

export default DashBoard;