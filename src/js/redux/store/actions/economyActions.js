import Firebase from './../../../constants/Firebase';

export function getEconomyList(){  
  return (dispatch, getState )=>{
    dispatch({
      type: 'ECONOMY_LOADING_STATUS',
      payload: true
    })
    Firebase.database().ref('/economyLists').on('value',snapshot => {
      dispatch({ 
        type: 'CREATE_ECONOMY_LIST_FETCH', 
        payload: snapshot.val()
        })
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
    Firebase.database().ref('/economyLists').push({
      date, 
      category,
      paymentMethod, 
      description,
      expences
    });
  };
};

export function deleteEconomyList(key){  
  return (dispatch)=>{
    Firebase.database().ref(`/economyLists/${key}`).remove();
  };
};

export function editEconomyList(date, category, paymentMethod, description, expences, key){  
  return (dispatch)=>{
    Firebase.database().ref(`/economyLists`).child(key).update({date, category, paymentMethod, description, expences});
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