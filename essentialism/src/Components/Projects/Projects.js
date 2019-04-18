import React from 'react';
import { connect } from "react-redux";
import Project from './Project';

class Projects extends React.Component {

    render(){
        return(
            <div>
                <p>Let's get started {this.props.user.username} these are your projects</p>
                <h2>Projects</h2>
                {this.props.projects.map((project,id) =>{
                   return <Project project={project} key={id}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
    return {
      projects: state.projectReducer.projects,
      user: state.loginReducer.user
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(Projects);