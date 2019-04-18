import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../Styles';
import {connect} from 'react-redux';
import {} from "../../actions";

class DashBoard extends React.Component {
    state = {
        projects: [],
        user:[]
      };

      

    render() {
        if(this.props.message === null || this.props.username === null){
            return(
                <div>Fetching user Info...</div>
            )
        } else{
            return(
                <div>
                    <h1>DashBoard</h1>
                    <p>{this.props.message}</p>
                    <p>{this.props.user.username}</p>
                    <div>
                        <Link to={'/projects'}><Button>My Projects</Button></Link>
                        <Link to={'/values'}><Button>My Values</Button></Link>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        message: state.users.message,
        user: state.users.user
    }
}
export default connect(
    mapStateToProps,
    {}
)(DashBoard);