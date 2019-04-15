import React from 'react';

class NewProject extends React.Component {
    render(){
        return(
            <div>
                <h1>NewProject</h1>
                <form action="updateProject">
                    <input type="text"/>
                    <button>Add Project</button>
                </form>
            </div>
        )
    }
}

export default NewProject;