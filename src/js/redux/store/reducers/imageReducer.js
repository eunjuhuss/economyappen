const initState = { }

function imageReducer (state = initState, action) {
  switch (action.type) {
    case 'UPLOAD_IMAGE':
    return state;
    default:
    return state  
  }
}

export default imageReducer;