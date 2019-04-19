import React from 'react';
import Value from './Value';

import { connect } from "react-redux";
import { fetchDefaultValues, fetchUserValues } from '../../actions/index.js';

class Values extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        uservalues: [],
        defaultValues: []
    }
}

componentDidMount(){
    const user_id = localStorage.getItem("user_id")
    if (localStorage.getItem("token") && localStorage.getItem("user_id")){
        this.props.fetchUserValues(user_id)
        this.props.fetchDefaultValues()
        this.setState({uservalues: this.props.uservalues, defaultValues: this.props.defaultValues})
    }
}

componentDidUpdate(prevProps){
    if(prevProps.uservalues !== this.props.uservalues && prevProps.defaultValues !== this.props.defaultValues){
        this.setState({uservalues: this.props.uservalues, defaultValues: this.props.defaultValues})
    }
}

    render(){
        if (!localStorage.getItem("token") && !localStorage.getItem("user_id")){
        return(
            <div>
                <p>Please log in...</p>
            </div>
        )
        } else {
            return (
            <div>
                <h2>My Values</h2>
                {this.state.uservalues.map((value,id) =>{
                   return <Value value={value} key={id}/>
                })}
            </div>
            )
        }
    }
}
const mapStatetoProps = state => {
    return {
      uservalues: state.userValues.uservalues,
      defaultValues: state.defaultValues.defaultValues
    };
  };
  export default connect(
    mapStatetoProps,
    { fetchDefaultValues, fetchUserValues }
  )(Values)