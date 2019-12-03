const initState = {
  economyList: {}
}

function economyListReducer (state = initState, action) {
  switch (action.type) {
    case 'CREATE_ECONOMY_LIST':
      console.log('created economy', action.payload);
      return state;
        case 'CREATE_ECONOMY_LIST_FETCH':
      return {...state, economyList:action.payload};
      default:
  return state
  }

}

export default economyListReducer;