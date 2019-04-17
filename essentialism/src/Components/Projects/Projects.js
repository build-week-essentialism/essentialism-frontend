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
                <h2>My Projects</h2>
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
      projects: state.projectReducer.projects
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(Projects);