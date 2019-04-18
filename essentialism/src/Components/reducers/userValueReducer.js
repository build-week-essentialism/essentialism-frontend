import * as actionTypes from '../actions';

const initialState = {
  uservalues: [],
  gettingValues: false,
  updatingValue: false,
  creatingValue: false,
  deletingValue: false,
  error: null
};

export const userValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_VALUES_START:
      return { 
        ...state, 
        gettingValues: true 
      };
    case actionTypes.USER_VALUES_SUCCESS:
    console.log(action.payload)
      return { 
        ...state, 
        values: action.payload,
        gettingValues: false 
      };
    case actionTypes.USER_VALUES_FAILURE:
      return {
        ...state,
        gettingValues: false,
        creatingValue: false,
        deletingValue: false,
        updatingValue: false,
        error: action.payload
      };
    default:
      return state;
  }
};