import economyListReducer from './economyListReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  economyList: economyListReducer,
  loadingReducer: loadingReducer,
  userReducer: userReducer,
  chatReducer: chatReducer
})

export default rootReducer;