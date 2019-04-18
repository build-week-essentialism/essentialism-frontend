import React from 'react'
import {connect} from 'react-redux'
import { login, register, fetchProjects, fetchDefaultValues, fetchUserValues } from "../actions";

class Home extends React.Component {
    state = {
        projects: []
      };


    render() {
    return(
        <div>
            <h1>Home</h1>
            <p>{this.props.message}</p>
            <p>{this.props.user.username}</p>
        </div>
    )}
}
const mapStateToProps = state => {
    return {
       message: state.users.message,
       user: state.users.user
    }
}
export default connect(
    mapStateToProps,
    { login, register, fetchProjects, fetchDefaultValues, fetchUserValues }
)(Home);