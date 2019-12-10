import Firebase from './../../../constants/Firebase';

export function getEconomyList(){  
  return (dispatch, getState )=>{
    const { currentUser } = Firebase.auth(); 
    dispatch({
      type: 'ECONOMY_LOADING_STATUS',
      payload: true
    })
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`).on('value',(snapshot)=> {
      dispatch({ 
        type: 'CREATE_ECONOMY_LIST_FETCH', 
        payload: snapshot.val()
        });
      
      dispatch({
        type: 'ECONOMY_LOADING_STATUS',
        payload: false
      })     
      }
    );
  };
};

export function createEconomyList(date, category, paymentMethod, description, expences){  
  return (dispatch)=>{
 
  const { currentUser } = Firebase.auth(); 
  console.log(currentUser)
  Firebase.database().ref(`/users/${currentUser.uid}/economyLists`).push({
      date, 
      category,
      paymentMethod, 
      description,
      expences
    })
    .then(()=>{
      dispatch({ type: 'CREATE_ECONOMY_LISTS'});
      Actions.economyLists({ type: 'reset' });
    })
  };
};

export function deleteEconomyList({uid}){  
  const { currentUser } = Firebase.auth(); 
  return (dispatch)=>{
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${uid}`).remove()
    .then(()=>{
      dispatch({ type: 'REMOVE_ECONOMY_LISTS'})
    })
  };
};

export function editEconomyList({date, category, paymentMethod, description, expences, key}){  
  const { currentUser } = Firebase.auth(); 
  return (dispatch)=>{
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`).set({date, category, paymentMethod, description, expences});
  };
};

// export const createEconomyList = (economyList) => 
// {  return (dispatch, getState, {getFirebase, getFirestore})=>{
//     //make async call ti database
//     const firestore = getFirestore();
//     firestore.collection('economyLists').add({
//       ...economyList,
//       date: new Date(),
//       category: 'frukost'
//     }).then(()=>{
//       dispatch({ type: 'CREATE_ECONOMY_LIST', economyList});
//     }).catch((err)=>{
//       dispatch({ type: 'CREAT_ECONOMY_ERROR', err});
//     })
//   };
// };