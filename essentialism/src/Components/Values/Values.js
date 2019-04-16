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
                {this.props.values.map((value,id) =>{
                   return <Value value={value} id={id}/>
                })}
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
      values: state.values
    };
  };
  export default connect(
    mapStatetoProps,
    {}
  )(Values)