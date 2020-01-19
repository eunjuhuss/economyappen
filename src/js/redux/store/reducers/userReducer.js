import * as actionTypes from '../../constants/action-types';
const initState = { }

function userReducer (state = initState, action) {
    switch (action.type) {
    case actionTypes.LOGOUT_SUCCESS: 
    return state;    
    case actionTypes.RESET_PASSWORD_SUCCESS: 
    return state;
    default: 
    return state;
  }
};
export default userReducer;
