import authReducer from './authReducer';
import economyListReducer from './economyListReducer';
import userReducer from './userReducer';

import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  economyList: economyListReducer,
  loadingReducer: loadingReducer,
  userReducer: userReducer
})

export default rootReducer;