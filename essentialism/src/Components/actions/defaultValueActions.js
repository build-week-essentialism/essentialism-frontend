import axiosAuth from "../Auth/axiosAuth";
import {URL} from './loginActions';

export const DEFAULT_VALUES_START = "DEFAULT_VALUES_START";
export const DEFAULT_VALUES_SUCCESS = "DEFAULT_VALUES_SUCCESS";
export const DEFAULT_VALUES_FAILURE = "DEFAULT_VALUES_FAILURE";
const user_id = localStorage.getItem('user_id')
console.log(user_id)
export const fetchDefaultValues = () => dispatch => {
  dispatch({ type: DEFAULT_VALUES_START });
  return axiosAuth()
    .get(`${URL}/api/defaultvalues`)
    .then(res => {
      console.log(res);
      dispatch({ type: DEFAULT_VALUES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DEFAULT_VALUES_FAILURE, payload: err });
    });
};