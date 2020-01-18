import * as actionTypes from '../../constants/action-types';
const initState = { }

// function economyListReducer (state = initState, action) {
//   switch (action.type) {
//     case 'FETCH_ECONOMY_LIST':
//     return action.payload;
//     case 'CREATE_ECONOMY_LISTS':
//     return state;
//     case 'REMOVE_ECONOMY_LISTS':
//     return state;
//     case 'UPDATE_ECONOMY_LISTS':
//     return state;
//     default:
//     return state  
//   }
// }

function economyListReducer (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ECONOMY_LIST_START:
    return state;
    case actionTypes.GET_ECONOMY_LIST_SUCCESS:
    return action.payload;
    case actionTypes.GET_ECONOMY_LOADING_FAIL:
    return state;
    case actionTypes.CREATE_ECONOMY_LIST:
    return state;
    case actionTypes.REMOVE_ECONOMY_LIST:
    return state;
    case actionTypes.UPDATE_ECONOMY_LIST:
    return state;
    default:
    return state  
  }
}

export default economyListReducer;