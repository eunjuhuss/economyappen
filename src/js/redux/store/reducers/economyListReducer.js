const initState = {
  economyList: {}
}

function economyListReducer (state = initState, action) {
  switch (action.type) {
    case 'CREATE_ECONOMY_LISTS':
      console.log('created economy', action.payload);
      return state;
        case 'CREATE_ECONOMY_LIST_FETCH':
      return action.payload;
      default:
  return state
  }

}

export default economyListReducer;