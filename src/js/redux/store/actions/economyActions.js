import Firebase from './../../../constants/Firebase';

export function getEconomyList() {  
  return (dispatch, getState) => {
    const { currentUser } = Firebase.auth(); 
    dispatch({
      type: 'ECONOMY_LOADING_STATUS',
      payload: true
    })
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`)
    .orderByChild("date")
    .on('value',(snapshot)=> {
      dispatch({ 
        type: 'FETCH_ECONOMY_LIST', 
        payload: snapshot.val()
      });      
      dispatch({
        type: 'ECONOMY_LOADING_STATUS',
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
      dispatch({ type: 'CREATE_ECONOMY_LISTS'});
    })
  };
};

export function deleteEconomyList(uid) {  
  const { currentUser } = Firebase.auth(); 
  return (dispatch) => {
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`)
    .remove()
    .then(()=>{
      dispatch({ type: 'REMOVE_ECONOMY_LISTS'})
    })
  };
};

export function editEconomyList( expence, income, date, category, paymentMethod, description, price, uid) { 
  const { currentUser } = Firebase.auth(); 
  return (dispatch) => {
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`)
    .update({ expence, income, date, category, paymentMethod, description, price})
    .then(() => {
      dispatch({ type: 'UPDATE_ECONOMY_LISTS' });
    })
  };
};