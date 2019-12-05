import Firebase from './../../../constants/Firebase';


export function getUser() {
  return dispatch => {
    Firebase.auth().onAuthStateChanged(user => {
      dispatch({
        type: 'GET_USER',
        payload: user
      });
    });
  };
}


export function createUser(email, password){  
    return dispath => Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userinfo => {
      console.log('got it')
    })
    .catch(error=> {
      console.log(error)
    })
  }




export function login(email, password) {
  return dispatch => Firebase.auth().signInWithEmailAndPassword(email, password);
}


export function logout() {
  return dispatch => Firebase.auth().signOut();
}

