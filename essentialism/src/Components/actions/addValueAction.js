import axios from "axios";
import { URL } from './loginActions';
import {user_id} from '../reducers/loginReducer';

export const ADD_VALUE_START = "ADD_VALUE_START";
export const ADD_VALUE_SUCCESS = "ADD_VALUE_SUCCESS";
export const ADD_VALUE_FAILURE = "ADD_VALUE_FAILURE";

export const addValue = created_value_name => dispatch => {
  dispatch({ type: ADD_VALUE_START });
  return axios
    .post(`${URL}/api/auth/createdvalues`, created_value_name, user_id)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_VALUE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ADD_VALUE_FAILURE, payload: err });
    });
};