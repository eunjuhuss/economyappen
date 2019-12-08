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

export function createUser(newUser){  
    return dispath => Firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(()=> {
      dispath({ type: 'REGISTER_SUCCESS'})
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
  return dispatch => Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    dispatch({type: 'LOGIN_SUCESS'})
  })
  .catch(error=> {
    dispatch({type: 'LOGIN_ERROR', error})
  })
}

export function logout() {
  return dispatch => Firebase.auth().signOut().then(()=> {
    dispatch({ type: 'LOGOUT_SUCCESS'})
  });
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

