import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//Initial State

const initialState = {
  name: ' ',
  userData: { }
}

//Reducer

const reducer = (state= initialState, action) => {
  switch(action.type) {
    case "setUserName": return {...state, name: action.value };
    
    case "setUserData":
      return { ...state, userData: action.value }

    default: return state;
  }

};

//Store

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//Action

const setUserName= (name) => {
  return {
    type: "setUserName",
    value: name
  }
}

const setUserData = (userData) => {
  return {
      type: "setUserData",
      value: userData
  };
}

const watchUserData = () => {
 return function(dispatch) {
   firebase.database().ref('user').on('value', function(snapshot) {
     var userData = snapshot.val();
     dispatch(setUserData(userData));
   }, function(error) {

   });

};
}

export { setUserData, setUserName, watchUserData };