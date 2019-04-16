import axiosAuth from "../Auth/axiosAuth";
import {URL} from './loginActions';
export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

export const fetchProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS_START });
  return axiosAuth()
    .get(`${URL}/api/projects/`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
    });
};