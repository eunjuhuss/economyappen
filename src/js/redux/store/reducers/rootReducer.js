import authReducer from './authReducer';
import economyListReducer from './economyListReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
 
const rootReducer = combineReducers({
  auth: authReducer,
  economyList: economyListReducer,
  firestore: firestoreReducer
})

export default rootReducer;