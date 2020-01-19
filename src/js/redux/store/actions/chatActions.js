import Firebase from './../../../constants/Firebase';

export function loadMessages() {  
  return (dispatch) => {  
    FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot)=>{
    dispacth(loadMessagesSuccess(snapshot.val()))
    }, (errorObject)=>{
      dispatch(loadMessagesError(errorObject.message))
    }
  )
};
}

export function updateMessages(text) {  
  return (dispatch) => {
    dispatch(chatUpdateMessage(text))
};
}

export function sendMessage(message) {  
  return (dispatch) => {
    dispatch(chatMessageLoading())

    const currentUser = Firebase.auth().currentUser;
    const createAt = new Date().getTime()
    const chatMessage = {
      text:message,
      createAt: createAt,
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }

    FIREBASE.REF.MESSAGES.push().set(chatMessage,(error)=>{
      if(error){
        dispatch(chatMessageError(error.message))
      } else{
        dispatch(chatMessageSuccess())
      }
    })
};
}