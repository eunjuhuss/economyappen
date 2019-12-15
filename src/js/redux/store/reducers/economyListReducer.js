const initState = { }

function economyListReducer (state = initState, action) {
  switch (action.type) {
    case 'FETCH_ECONOMY_LIST':
    return action.payload;
    case 'CREATE_ECONOMY_LISTS':
    return state;
    case 'REMOVE_ECONOMY_LISTS':
    return state;
    case 'UPDATE_ECONOMY_LISTS':
    return state;
    default:
    return state  
  }
}

export default economyListReducer;