import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../Styles'

class NewProject extends React.Component {
    state ={
        projects:[]
    }

    handleChange = e => {
        this.setState({
          projects: this.state.project
        });
      };

    render(){
        return(
            <div>
                <h2>New Project</h2>
                <form onSubmit={this.newProject}>
                    <input 
                    type="text"
                    name="project"
                    value={this.state.project}
                    onChange={this.handleChange}
                    placeholder="New Project"
                    />
                    <Button>Add Project</Button>
                </form>
                <Link to="/settings"><Button>Settings</Button></Link>
            </div>
        )
    }
}

export default NewProject;