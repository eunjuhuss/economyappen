const initState = {
  economyList: {}
}

function loadingReducer(state = initState, action) {
  switch (action.type) {
    case 'ECONOMY_LOADING_STATUS':
      return {
        ...state,
        loadingReducer:action.payload
      };
      default:
        return state
  }

}

export default loadingReducer;