import React from 'react';
import { Button, ValueCard } from '../Styles';

const DefaultValue = props => {
    console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", props.value.created_value_name)
    return(
        <ValueCard>
            {(props.value.default_value_name !== 'null') ? <h4>{props.value.default_value_name}</h4> : <h4>{props.value.created_value_name}</h4>} 
            <Button>Edit</Button>
        </ValueCard>
        
    )
}

export default DefaultValue;