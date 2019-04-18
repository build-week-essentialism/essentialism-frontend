import React from 'react';

const Value = props => {
    console.log('value props', props)
    return(
        <div>
            {(props.value.default_value_name !== 'null') ? <h4>{props.value.default_value_name}</h4> : <h4>{props.value.created_value_name}</h4>}
        </div>
    )

}

export default Value;