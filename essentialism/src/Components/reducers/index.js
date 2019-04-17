import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';
import { userValueReducer } from './userValueReducer';
import { defaultValueReducer } from './defaultValueReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
  projectReducer,
  userValueReducer,
  defaultValueReducer,
  loginReducer
});