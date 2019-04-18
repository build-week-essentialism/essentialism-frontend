import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Button} from '../Styles';

class Settings extends React.Component {
    state={
        user:''
    }
    render(){
        return(
            <div>
                <p>Ok {this.props.user.username} this where you can edit the values,
                 and projects that you are currently working on
                </p><p>You currently have {} active prjects, and {} selected values</p>
                <Link to="/settings/edit-values"><Button>Edit Values</Button></Link>
                <Link to="/settings/edit-projects"><Button>Edit Projects</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.users.user,
        uservalues: state.userValues.uservalues,
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(Settings);