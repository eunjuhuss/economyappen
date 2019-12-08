
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
