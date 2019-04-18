import React from 'react';
import { Button } from '../Styles';
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";
import { addValue } from "../actions";

class NewValues extends React.Component {
    render(){
        return(
            <div>
                <h2>New Values</h2>
                <form onSubmit={addValue}>
                    <input
                        type="text"
                        name="addValue"
                        value={this.props.createdValue}
                        onChange={this.handleChange}
                        placeholder="add value"
                    />
                    <Button>
                    {" "}
                        {this.props.loggingIn ? (
                        <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                        "Add Value"
                        )}
                    </Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        createdValue: state.createdValues.createValue,
    };
  };
  
  export default connect(
    mapStateToProps,
    { addValue }
  )(NewValues);