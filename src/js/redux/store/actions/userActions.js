import Firebase from './../../../constants/Firebase';


export function getUser() {
  return dispatch => {
    Firebase.auth().onAuthStateChanged(user => {
      if(user.emailVerified){
        
      }
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
  return dispatch => auth.signOut();
}


// export function createUser(){  
//     return async (dispatch, getState) => {
//         try {
//             const { email, password } = getState().user
//             const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
//             dispatch({ type: SIGNUP, payload: response.user })
//         } catch (e) {
//             console.log(e)
//         }
//     }
//   }




// export function login(){
//     return async (dispatch, getState) => {
//         try {
//             const { email, password } = getState().user
//             const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
//             dispatch({ type: LOGIN, payload: response.user })
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

