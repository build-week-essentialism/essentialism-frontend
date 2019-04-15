import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import DashBoard from './Components/Dashboard/DashBoard';
import Login from './Components/Auth/Login';
import authenticate from './Components/Auth/authenticate';

class App extends Component {
  render() {
    return (
      <Router>
        <ConditionalView/>
      </Router>
    );
  }
}
const ConditionalView = authenticate(DashBoard)(Login);

export default App;
