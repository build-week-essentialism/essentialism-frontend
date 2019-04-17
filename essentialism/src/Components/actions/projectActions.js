import axiosAuth from "../Auth/axiosAuth";
import {URL} from './loginActions';
import {user_id} from '../reducers/loginReducer';

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";
console.log(user_id)
export const fetchProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS_START });
  return axiosAuth()
    .get(`${URL}/api/projects/`,{
      params: {
        user_id:''
      }
    })
    .then(res => {
      console.log('projects action', res);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
    });
};