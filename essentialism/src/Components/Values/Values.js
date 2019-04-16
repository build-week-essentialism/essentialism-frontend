import React from 'react';
import Value from './Value';
import NewValues from './NewValues';
import { connect } from "react-redux";

class Values extends React.Component {
  state ={
    createdValues: [],
    defaultValues: [],
    values: []
  }
    render(){
        return(
            <div>
                <h1>My Values</h1>
                <NewValues/>
                <h2>Default Values</h2>
                {this.state.defaultValues.map((value,id) =>{
                   return <Value value={value} key={id}/>
                })}
                <h2>My Values</h2>
                {this.state.values.map((value,id) =>{
                   return <Value value={value} id={id}/>
                })}
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
      values: state.valueReducer.values,
      defaultValues: state.valueReducer.defaultValues,
      createdValues: state.valueReducer.createdValues
    };
  };
  export default connect(
    mapStatetoProps,
    {}
  )(Values)