import * as actionTypes from '../actions';

const initialState = {
  createdValue: [],
  updatingValues: false,
  updatingValue: false,
  creatingValue: false,
  deletingValue: false,
  error: null
};

export const createValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_VALUES_START:
      return {
        ...state,
        updatingValues: true,
        creatingValue: true
      };
    case actionTypes.USER_VALUES_SUCCESS:
      return {
        ...state,
        createdValue: action.payload,
        creatingValue: false,
        updatingValues: false
      };
    case actionTypes.USER_VALUES_FAILURE:
      return {
        ...state,
        updatingValues: false,
        creatingValue: false,
        deletingValue: false,
        updatingValue: false,
        error: action.payload
      };
    default:
      return state;
  }
};