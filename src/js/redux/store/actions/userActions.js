import Firebase from './../../../constants/Firebase';
import * as actionTypes from '../../constants/action-types';

export function logout() {
  return (dispatch) => 
  Firebase.auth()
  .signOut().then(()=> {
    dispatch({ 
      type: actionTypes.LOGOUT_SUCCESS
    })
    console.log('SUCCESS LOGOUT')
  });
}

export function resetPassword(email){
  return (dispatch) => 
    Firebase.auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      dispatch({
        type: actionTypes.RESET_PASSWORD_SUCCESS,
        payload: 'Reset email sent. Go check your inbox.'
      })
      console.log('RESET PASSWORD SUCCESS')
    });    
  }