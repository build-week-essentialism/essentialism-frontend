import axiosAuth from "../Auth/axiosAuth";
import { URL } from './loginActions';

export const USER_VALUES_START = "USER_VALUES_START";
export const USER_VALUES_SUCCESS = "USER_VALUES_SUCCESS";
export const USER_VALUES_FAILURE = "USER_VALUES_FAILURE";

export const fetchUserValues = (user_id) => dispatch => {
  dispatch({ type: USER_VALUES_START });
  return axiosAuth()
    .get(`${URL}/api/uservalues/${user_id}`)
    .then(res => {
      dispatch({ type: USER_VALUES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_VALUES_FAILURE, payload: err });
    });
};