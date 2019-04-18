import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';
import { userValueReducer } from './userValueReducer';
import { defaultValueReducer } from './defaultValueReducer';
import { createValueReducer } from './createdValueReducer';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducers';

export default combineReducers({
  projectReducer,
  userValueReducer,
  defaultValueReducer,
  createValueReducer,
  loginReducer,
  registerReducer
});