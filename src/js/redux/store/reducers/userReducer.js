
const initState = {
  user: {},
  error: null
}

// function userReducer (state = initState, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {...state, 
//       user:action.payload};
//       case 'LOGIN_USER':
//       return {...state, 
//       user:action.payload}
//     default:
//       return state
//   }

// }

function userReducer (state = initState, action) {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state, 
        error:'Login failed'};
    case 'LOGIN_SUCCESS':
      console.log('login sucess')
      return {
        ...state,
        error: null,
        user:action.payload
        }
    case 'LOGOUT_SUCCESS':
      console.log('logout sucess')
      return {
      state
        }
    case 'REGISTER_SUCCESS':
      console.log('register sucess')
      return {
      ...state,
      error: null
        }
      case 'REGISTER_ERROR':
      console.log('register error')
      return {
      ...state,
      error: action.error.message
        }
    default:
      return state
  }

}


// export function loginUserReducer (state = {user: {}}, action) {
//   switch (action.type) {
//     case 'LOGIN_USER':
//       return {...state, 
//       user:action.payload};
//     default:
//       return state
//   }

// }

export default userReducer;
