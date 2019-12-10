import Firebase from './../../../constants/Firebase';

export function getEconomyList(){  
  return (dispatch, getState )=>{
    const { currentUser } = Firebase.auth(); 
    dispatch({
      type: 'ECONOMY_LOADING_STATUS',
      payload: true
    })
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`)
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

export function createEconomyList(date, category, paymentMethod, description, expences){  
  return (dispatch)=>{ 
    const { currentUser } = Firebase.auth(); 
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`)
    .push({
      date, 
      category,
      paymentMethod, 
      description,
      expences
    })
    .then(()=>{
      dispatch({ type: 'CREATE_ECONOMY_LISTS'});
    })
  };
};

export function deleteEconomyList(uid){  
  const { currentUser } = Firebase.auth(); 
  return (dispatch)=>{
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`)
    .remove()
    .then(()=>{
      dispatch({ type: 'REMOVE_ECONOMY_LISTS'})
    })
  };
};

export function editEconomyList(date, category, paymentMethod, description, expences, uid){ 
  const { currentUser } = Firebase.auth(); 
  return (dispatch)=>{
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`)
    .update({date, category, paymentMethod, description, expences})
    .then(() => {
      dispatch({ type: 'UPDATE_ECONOMY_LISTS' });
    })
  };
};