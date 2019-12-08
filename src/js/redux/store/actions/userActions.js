import Firebase from './../../../constants/Firebase';


export function getUser() {
  return dispatch=> {
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

// export function createUser(email, password) {
//   try {
//     Firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(dataBeforeEmail => {
//         Firebase.auth().onAuthStateChanged(function(user) {
//           user.sendEmailVerification();
//         });
//       })
//       .then(dataAfterEmail => {
//         Firebase.auth().onAuthStateChanged(function(user) {
//           if (user.emailVerified) {
//             // Email is verified
//             dispatch({
//               type: 'GET_USER_SUCCESS',
//               payload:
//                 "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
//             });
//           } else {
//             // Email is not verified
//             dispatch({
//               type: 'GET_USER_ERROR',
//               payload:
//                 "Something went wrong, we couldn't create your account. Please try again."
//             });
//           }
//         });
//       })
//       .catch(function(error) {
//         dispatch({
//           type: 'REGISTER_ERROR',
//           payload:
//             "Something went wrong, we couldn't create your account. Please try again."
//         });
//       });
//   } catch (err) {
//     dispatch({
//       type: 'REGISTER_ERROR',
//       payload:
//         "Something went wrong, we couldn't create your account. Please try again."
//     });
//   }
// };

export function createUser(email, password){  
    return dispath => Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {})
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          // alert(`Email address ${email} already in use.`)
          break;
        case 'auth/invalid-email':
          // alert(`Email address ${email} is invalid.`)
          break;
        case 'auth/operation-not-allowed':
          // alert(`Error during sign up.`)
          break;
        case 'auth/weak-password':
          // alert('Password is not strong enough. Add additional characters including special characters and numbers.')
          break;
        default:
          // alert(error.message)
          break;

      }
  })
}


export function login(user) {
  return dispatch => Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    dispatch({type: 'LOGIN_SUCESS'})
  })
  .catch(error=> {
    dispatch({type: 'LOGIN_ERROR', error})
  })
}

export function logout() {
  return dispatch => auth.signOut();
}







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

