import React from 'react';
import Project from './Project';

class Projects extends React.Component {
    render(){
        return(
            <div>
                <h1>My Projects</h1>
                <Project/>
                <Project/>
                <Project/>
            </div>
        )
    }
}

export default Projects;