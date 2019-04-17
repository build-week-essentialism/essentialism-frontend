import axiosAuth from "../Auth/axiosAuth";
import { URL } from './loginActions';
import {user_id} from '../reducers/loginReducer';

export const USER_VALUES_START = "USER_VALUES_START";
export const USER_VALUES_SUCCESS = "USER_VALUES_SUCCESS";
export const USER_VALUES_FAILURE = "USER_VALUES_FAILURE";
console.log(user_id)
export const fetchUserValues = () => dispatch => {
  dispatch({ type: USER_VALUES_START });
  return axiosAuth()
    .get(`${URL}/api/uservalues/${user_id}`,)
    .then(res => {
      console.log(res);
      dispatch({ type: USER_VALUES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_VALUES_FAILURE, payload: err });
    });
};