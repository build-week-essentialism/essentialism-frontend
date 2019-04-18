import React, { Component } from "react";
import { register, login } from "../../actions";
import {Button} from '../Styles/';
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";


export class Register extends Component {
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

newUser = e => {
    e.preventDefault();
    this.props
        .register(this.state.credentials)
        .then(() => {
          this.props.login(this.state.credentials);})
        .then(() => {
          this.props.history.push("/new-user");
        })
    };

  render() {
    return (
      <div>
        <form onSubmit={this.newUser}>
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
            {this.props.registerUser ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "New User"
            )}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      registerUser: state.register.registerUser,
      error: state.users.error,
      user: state.users.user
    };
  };
  
  export default connect(
    mapStateToProps,
    { register, login }
  )(Register);