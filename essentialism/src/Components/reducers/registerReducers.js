import * as actionTypes from '../actions';

const initialState = {
    registerUser: false,
    error: "",
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.REGISTER_START:
        return {
          ...state,
          error: "",
          registerUser: true
        };
      case actionTypes.REGISTER_SUCCESS:
      console.log("register success", action.payload)
        return {
          ...state,
          error: "",
          loggingIn: false
        };
      case actionTypes.REGISTER_FAILURE:
        return {
          ...state,
          error: action.payload,
          registerUser: false
        };
        default:
        return state;
    }
  };