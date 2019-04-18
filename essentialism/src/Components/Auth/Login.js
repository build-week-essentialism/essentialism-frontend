import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Button } from "../Styles"

import { login, fetchProjects, fetchDefaultValues, fetchUserValues } from "../actions";

class Login extends React.Component {
  
     state = {
        credentials: {
          username: "",
          password: ""
      }
    }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };


  loginAttempt = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => {
        this.props.history.push("/dashboard");
      });
  };


  render() {
    return (
      <div>
        <form onSubmit={this.loginAttempt}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            autoComplete="username"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            autoComplete="current-password"
            placeholder="password"
          />
          <Button>
            {" "}
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </Button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.users.loggingIn,
    error: state.users.error,
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  { login, fetchProjects, fetchDefaultValues, fetchUserValues }
)(Login);