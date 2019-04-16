import React from 'react';
import { Button } from '../Styles'

class NewProject extends React.Component {
    render(){
        return(
            <div>
                <h1>NewProject</h1>
                <form action="updateProject">
                    <input type="text"/>
                    <Button>Add Project</Button>
                </form>
            </div>
        )
    }
}

export default NewProject;