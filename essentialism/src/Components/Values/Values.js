import React from 'react';
import Value from './Value';
import NewValues from './NewValues';
import { connect } from "react-redux";

class Values extends React.Component {
    render(){
        return(
            <div>
                <h1>My Values</h1>
                <NewValues/>
                <h2>Default Values</h2>
                {this.props.defaultValues.map((value,id) =>{
                   return <Value value={value} key={id}/>
                })}
                <h2>My Values</h2>
                {this.props.values.map((value,id) =>{
                   return <Value value={value} id={id}/>
                })}
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
      values: state.userValueReducer.uservalues,
      defaultValues: state.defaultValueReducer.defaultValues
    };
  };
  export default connect(
    mapStatetoProps,
    {}
  )(Values)