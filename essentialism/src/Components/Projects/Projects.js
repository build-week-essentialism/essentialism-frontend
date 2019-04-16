import React from 'react';
import { connect } from "react-redux";
import Project from './Project';
import NewProject from './NewProject';

class Projects extends React.Component {
    render(){
        return(
            <div>
                <h1>My Projects</h1>
                <NewProject/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggingIn: state.loggingIn,
      error: state.error,
      projects: state.projects,
      values: state.values
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(Projects);