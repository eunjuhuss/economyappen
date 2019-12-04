import authReducer from './authReducer';
import economyListReducer from './economyListReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  economyList: economyListReducer,
  loadingReducer: loadingReducer
})

export default rootReducer;