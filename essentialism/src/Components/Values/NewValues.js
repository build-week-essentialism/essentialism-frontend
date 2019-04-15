import React from 'react';

class NewValues extends React.Component {
    render(){
        return(
            <div>
                <h1>New Values</h1>
                <form action="updateValues">
                    <input type="text"/>
                    <button>Submit Update</button>
                </form>
            </div>
        )
    }
}

export default NewValues;