import axiosAuth from "../Auth/axiosAuth";
import {URL} from './loginActions';

export const USER_VALUES_START = "USER_VALUES_START";
export const USER_VALUES_SUCCESS = "USER_VALUES_SUCCESS";
export const USER_VALUES_FAILURE = "USER_VALUES_FAILURE";
const user_id = localStorage.getItem('user_id')
console.log(user_id)
export const fetchUserValues = () => dispatch => {
  dispatch({ type: USER_VALUES_START });
  return axiosAuth()
    .get(`${URL}/api/uservalues/1`)
    .then(res => {
      console.log(res);
      dispatch({ type: USER_VALUES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_VALUES_FAILURE, payload: err });
    });
};