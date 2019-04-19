import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../Styles';
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";
import { addValue } from "../../actions";

class EditValues extends React.Component {
    render(){
        return(
            <div>
                <h2>Edit Values</h2>
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
                        <Loader type="ThreeDots"  height="12" width="26" />
                        ) : (
                        "Add Value"
                        )}
                    </Button>
                </form>
                <Link to="/settings"><Button>Settings</Button></Link>
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
  )(EditValues);