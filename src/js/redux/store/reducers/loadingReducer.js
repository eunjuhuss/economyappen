import * as actionTypes from '../../constants/action-types';
const initState = { }

function loadingReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ECONOMY_LIST_SUCCESS:
    return {
      ...state,
      loadingReducer: action.payload
    };
    default:
    return state
  }
}

export default loadingReducer;