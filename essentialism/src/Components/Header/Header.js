import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
    state = {
      user_id: null
    };
  
    componentDidMount = () => {
        this.getUserID();
      };
    
    getUserID = () => {
    const user_id = localStorage.getItem("user_id");
    this.setState({ ...this.state, user_id: user_id });
    return user_id;
    };
    
    Logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    };

    render(){
        const user_id = localStorage.getItem("user_id");
        if (!user_id) {
            return (
                <div>
                  <Link to={`/`}>
                    <h2>Essentialism</h2>
                  </Link>
                  <Link to={`/register`}>
                    <p>Register</p>
                  </Link>
                  <Link to={`/login`}>
                    <p>Login</p>
                  </Link>
                </div>
            );
          } else if (user_id) {
            return (
                <div>
                  <Link to={`/`}>
                    <h2>lifeGPA</h2>
                  </Link>
                  <Link to="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                  <Link to={`/login`}>
                    <p onClick={this.Logout}>Logout</p>
                  </Link>
                </div>
            );
          }
        }
    }

export default Header;