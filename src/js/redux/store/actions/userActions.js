import Firebase from './../../../constants/Firebase';

export function getUser() {
  return (dispatch) => {
    Firebase.auth().onAuthStateChanged(user => {
      if(user !== null){
        dispatch({type: 'GET_USER',  payload: user})          
      } else{
        console.log('not logged in')
      }
    });
  }  
}

export function createUser(newUser){  
  return (dispath) => Firebase.auth()
  .createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((userInfo)=> {      
    dispath({ type: 'REGISTER_SUCCESS'});
  })
  .catch(error => {
    dispath({ type: 'REGISTER_ERROR', error})
      switch (error.code) {
      case 'auth/email-already-in-use':
      console.log(`Email address ${newUser.email} already in use.`)
      break;
      case 'auth/invalid-email':
      console.log(`Email address ${newUser.email} is invalid.`)
      break;
      case 'auth/operation-not-allowed':
      console.log(`Error during sign up.`)
      break;
      case 'auth/weak-password':
      console.log('Password is not strong enough. Add additional characters including special characters and numbers.')
      break;
      default:
      console.log(error.message)
      break;
    }
  })
}

export function login(user) {
  return (dispatch) => Firebase.auth()
  .signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    dispatch({type: 'LOGIN_SUCESS'})
  })
  .catch(error=> {
    dispatch({type: 'LOGIN_ERROR', error})
  })
}

export function logout() {
  return (dispatch) => Firebase.auth()
  .signOut().then(()=> {
    dispatch({ type: 'LOGOUT_SUCCESS'})
    console.log('SUCCESS LOGOUT')
  });
}