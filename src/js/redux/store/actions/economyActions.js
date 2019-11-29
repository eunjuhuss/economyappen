import * as firebase from 'firebase';
import 'firebase/firestore';

export const createEconomyList = (economyList) => 
{  return (dispatch, getState )=>{
    //make async call ti database
   
    firebase.firestore().collection('economyLists').add({
      ...economyList,
      date: new Date(),
      category: 'frukost'
    }).then(()=>{
      dispatch({ type: 'CREATE_ECONOMY_LIST', economyList});
    }).catch((err)=>{
      dispatch({ type: 'CREAT_ECONOMY_ERROR', err});
    })
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