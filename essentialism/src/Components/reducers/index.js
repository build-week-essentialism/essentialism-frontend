import { combineReducers } from 'redux';
import { projectReducer } from './projectReducers';
import { valueReducer } from './valueReducers';
import { loginReducer } from './loginReducers';

export default combineReducers({
  projectReducer,
  valueReducer,
  loginReducer
});