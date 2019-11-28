import authReducer from './authReducer';
import economyListReducer from './economyListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  economyList: economyListReducer
})

export default rootReducer;