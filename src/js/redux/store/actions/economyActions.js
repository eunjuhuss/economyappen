import Firebase from './../../../constants/Firebase';

export function getEconomyList()
{  return (dispatch, getState )=>{
    //make async call ti database
   
    Firebase.database().ref('/economyLists').on('value',snapshot => {
      dispatch({ 
        type: 'CREATE_ECONOMY_LIST_FETCH', 
        payload: snapshot.val()
        });
        
        });
  };
};



export function createEconomyList(date, category)
{  return (dispatch, getState )=>{
    //make async call ti database
   
    Firebase.database().ref('/economyLists').push({date, category});
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