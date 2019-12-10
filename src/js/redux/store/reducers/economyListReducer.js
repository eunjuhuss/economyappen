const initState = {}

function economyListReducer (state = initState, action) {
  switch (action.type) {
    case 'CREATE_ECONOMY_LISTS':
      return state;
    case 'FETCH_ECONOMY_LIST':
      return action.payload;
    case 'REMOVE_ECONOMY_LISTS':
      return action.payload;
    case 'UPDATE_ECONOMY_LISTS':
      return action.payload;
    default:
      return state
  }

}

export default economyListReducer;