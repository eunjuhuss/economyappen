const initState = {
  user: {},
  error: null
}

function userReducer (state = initState, action) {
  switch (action.type) {
    case 'GET_USER':
    return {
      ...state,
      error: null,
      user:action.payload
    }
    case 'REGISTER_SUCCESS':
    return {
      ...state,
      error: null
    }
    case 'REGISTER_ERROR':
    return {
      ...state,
      error: action.error.message
    }
    case 'LOGIN_SUCCESS':
    return {
      ...state,
      error: null,
      user:action.payload
    };
    case 'LOGIN_ERROR':
    return {
      ...state, 
      error:'Login failed',
    };
    case 'LOGOUT_SUCCESS':
    return {
      state
    }    
    default:
    return state
  }
}

export default userReducer;
