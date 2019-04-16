import { combineReducers } from 'redux';
import { projectReducer } from './projectReducers';
import { valueReducer } from './valueReducers';

export default combineReducers({
  projectReducer,
  valueReducer
});