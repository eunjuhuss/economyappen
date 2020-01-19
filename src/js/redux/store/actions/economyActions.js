import Firebase from './../../../constants/Firebase';
import * as actionTypes from '../../constants/action-types';

export function getEconomyList() {  
  return (dispatch, getState) => {
    const { currentUser } = Firebase.auth(); 
    dispatch({
      type: actionTypes.GET_ECONOMY_LIST_START
    })
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`)
    .on('value',(snapshot)=> {
      dispatch({ 
        type: actionTypes.GET_ECONOMY_LIST_SUCCESS, 
        payload: snapshot.val()
      });      
      dispatch({
        type: actionTypes.GET_ECONOMY_LOADING_FAIL,
        payload: false
      })     
    });
  };
};

export function createEconomyList(expence, income, date, category, paymentMethod, description, price) {  
  return (dispatch) => { 
    const { currentUser } = Firebase.auth(); 
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/`)
    .push({
      expence,
      income,
      date,                           
      category,
      paymentMethod, 
      description,
      price
    })
    .then(()=>{
      dispatch({ type: actionTypes.CREATE_ECONOMY_LIST});
    })
  };
};

export function deleteEconomyList(uid) {  
  const { currentUser } = Firebase.auth(); 
  return (dispatch) => {
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`)
    .remove()
    .then(()=>{
      dispatch({ type: actionTypes.REMOVE_ECONOMY_LIST})
    })
  };
};

export function editEconomyList( expence, income, date, category, paymentMethod, description, price, uid) { 
  const { currentUser } = Firebase.auth(); 
  return (dispatch) => {
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`)
    .update({ expence, income, date, category, paymentMethod, description, price})
    .then(() => {
      dispatch({ type: actionTypes.UPDATE_ECONOMY_LIST });
    })
  };
};