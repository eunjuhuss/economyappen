const initState = {
  user: {}
}

function userReducer (state = initState, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {...state, 
      user:action.payload};
      case 'LOGIN_USER':
      return {...state, 
      user:action.payload}
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
