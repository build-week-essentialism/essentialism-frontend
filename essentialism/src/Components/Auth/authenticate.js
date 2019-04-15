import React from 'react';
import { checkAuth } from './checkAuth';

const authenticate = DashBoard => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      console.log('mounting');
      this.setState({
        loggedIn: checkAuth()
      });
    }
    render() {
      if (this.state.loggedIn) return <DashBoard />;
      return <Login />;
    }
  };

export default authenticate;
