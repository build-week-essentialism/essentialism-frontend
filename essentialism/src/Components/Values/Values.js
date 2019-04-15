import React from 'react';
import Value from './Value';

class Values extends React.Component {
    render(){
        return(
            <div>
                <h1>My Values</h1>
                <Value/>
                <Value/>
                <Value/>
            </div>
        )
    }
}

export default Values;