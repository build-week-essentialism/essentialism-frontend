import React from 'react';
import {Button, ProjectCard} from '../Styles';

const Project = props => {
    
    return(
        <ProjectCard>
            <h4>{props.project.project_name}</h4>
            <Button>Edit</Button>
        </ProjectCard>
    )
    
}

export default Project;