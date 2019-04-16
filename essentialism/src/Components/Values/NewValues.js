import React from 'react';
import { Button } from '../Styles'

class NewValues extends React.Component {
    render(){
        return(
            <div>
                <h2>New Values</h2>
                <form action="updateValues">
                    <input type="text"/>
                    <Button>Submit Update</Button>
                </form>
            </div>
        )
    }
}

export default NewValues;