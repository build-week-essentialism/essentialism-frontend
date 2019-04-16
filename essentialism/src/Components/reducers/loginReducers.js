import * as actionTypes from '../actions';

const initialState = {
    loggingIn: false,
    error: "",
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_START:
        return {
          ...state,
          error: "",
          loggingIn: true
        };
  
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          error: "",
          loggingIn: false
        };
  
      case actionTypes.LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          loggingIn: false
        };
        default:
        return state;
    }
  };