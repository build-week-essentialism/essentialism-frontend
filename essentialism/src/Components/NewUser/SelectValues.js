import React from 'react';
import { Link } from 'react-router-dom'
import Value from '../Values/Value';
import NewValues from '../Values/NewValues';
import { connect } from "react-redux";
import { fetchDefaultValues, fetchUserValues } from '../../actions/index.js';
import { Button } from '../Styles';

class SelectValues extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        uservalues: [],
        defaultvalues: [],
        createdvalues: []
    }
}

componentDidMount(){
    const user_id = localStorage.getItem("user_id");
    if (localStorage.getItem("token") && localStorage.getItem("user_id")){
        this.props.fetchUserValues(user_id)
        this.props.fetchDefaultValues()
        this.setState({uservalues: this.props.uservalues, defaultValues: this.props.defaultvalues})
    } else {
        this.props.fetchDefaultValues()
    }
}

componentDidUpdate(prevProps){
    if(prevProps.uservalues !== this.props.uservalues && prevProps.defaultvalues !== this.props.defaultvalues){
        this.setState({uservalues: this.props.uservalues, defaultvalues: this.props.defaultvalues})
    }
}

    render(){
        return(
            <div>
                <div>
                    <h2>Feel free to use our default values list to get started</h2>
                    {this.state.defaultvalues.map((value,id) =>{
                    return <Value value={value} key={id}/>
                    })}
                </div>
                <div>
                    <h2>Or feel free to create your own personalized values</h2>
                    <NewValues/>
                </div>
                <div>
                    <h2>Once you have selected 3 core values continue on to the projects page</h2>
                    <Link exact to="/new-project"><Button>Projects</Button></Link>
                </div>
                
                
            </div>
            )
        
    }
}
const mapStatetoProps = state => {
    console.log('mapStateToProps', state.defaultValues.defaultValues)
    return {
      uservalues: state.userValues.uservalues,
      defaultvalues: state.defaultValues.defaultValues,
    };
  };
  export default connect(
    mapStatetoProps,
    { fetchDefaultValues, fetchUserValues }
  )(SelectValues)