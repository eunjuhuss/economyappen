import * as actionTypes from '../../constants/action-types';
const initState = { }

function userReducer (state = initState, action) {
    switch (action.type) {
    case actionTypes.LOGOUT_SUCCESS: 
    return state;    
    case actionTypes.RESET_SUCCESS: 
    return action.payload;
    default: 
    return state;
  }
};
export default userReducer;
