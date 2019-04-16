import * as actionTypes from '../actions';

const initialState = {
    loggingIn: false,
    error: "",
    message: "",
    user:[]
}
export let id = initialState.user.id
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_START:
        return {
          ...state,
          error: "",
          loggingIn: true
        };
  
      case actionTypes.LOGIN_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          error: "",
          loggingIn: false,
          message: action.payload.message,
          user: action.payload.user
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