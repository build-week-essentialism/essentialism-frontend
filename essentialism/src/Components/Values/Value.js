import React from 'react';

const Value = props => {
    console.log(props)
    return(
        <div>
            <h4>{props.value.default_value_name}</h4>

        </div>
    )
    
}

export default Value;