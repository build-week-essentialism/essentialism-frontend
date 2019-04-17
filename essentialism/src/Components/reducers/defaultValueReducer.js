import * as actionTypes from '../actions';

const initialState = {
  defaultValues: [],
  gettingValues: false,
  updatingValue: false,
  creatingValue: false,
  deletingValue: false,
  error: null
};

export const defaultValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEFAULT_VALUES_START:
      return { 
        ...state, 
        gettingValues: true 
      };
    case actionTypes.DEFAULT_VALUES_SUCCESS:
    console.log(action.payload)
      return { 
        ...state,
        defaultValues: action.payload,
        gettingValues: false 
      };
    case actionTypes.DEFAULT_VALUES_FAILURE:
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