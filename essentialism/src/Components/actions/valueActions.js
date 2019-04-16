import axiosAuth from "../Auth/axiosAuth";
import {URL} from './loginActions';

export const FETCH_VALUES_START = "FETCH_VALUES_START";
export const FETCH_VALUES_SUCCESS = "FETCH_VALUES_SUCCESS";
export const FETCH_VALUES_FAILURE = "FETCH_VALUES_FAILURE";
const user_id = localStorage.getItem('user_id')

export const fetchValues = () => dispatch => {
  dispatch({ type: FETCH_VALUES_START });
  return axiosAuth()
    .get(`${URL}/api/defaultvalues/${user_id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_VALUES_FAILURE, payload: err });
    });
};