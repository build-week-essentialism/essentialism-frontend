import * as actionTypes from '../actions';

const initialState = {
  values: [],
  gettingValues: false,
  updatingValue: false,
  creatingValue: false,
  deletingValue: false,
  error: null
};

export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VALUES_START:
      return { 
        ...state, 
        gettingValues: true 
      };
    case actionTypes.FETCH_VALUES_SUCCESS:
      return { 
        ...state, 
        values: action.payload, 
        gettingValues: false 
      };
    case actionTypes.FETCH_VALUES_FAILURE:
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