import * as actionTypes from '../actions';

const initialState = {
  projects: [],
  gettingProjects: false,
  updatingProject: false,
  creatingProject: false,
  deletingProject: false,
  error: null
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS_START:
      return { 
          ...state, 
          gettingProjects: true
         };
    case actionTypes.FETCH_PROJECTS_SUCCESS:
    console.log(action.payload)
      return { 
          ...state, 
          projects: action.payload, 
          gettingProjects: false
        };
    case actionTypes.FETCH_PROJECTS_FAILURE:
      return {
            ...state,
            gettingProjects: false,
            creatingProject: false,
            deletingProject: false,
            updatingProject: false,
            error: action.payload
        };
    default:
      return state;
  }
};