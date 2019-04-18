import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const URL = "https://essentialism.herokuapp.com";

export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post(`${URL}/api/auth/register`, credentials)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};