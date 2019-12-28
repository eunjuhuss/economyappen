const initState = {
  sending: false,
  sendingError: null,
  message: '',
  messages: {},
  loadMessagesError: null
}

function chatReducer (state = initState, action) {
  switch (action.type) {
    case 'CHAT_MESSAGE_LOADING':
    return {...state, sending: true, sendingError: null};
    case 'CHAT_MESSAGE_ERROR':
    return {...state, sending: false, sendingError: action.error};
    case 'CHAT_MESSAGE_SUCCESS':
    return {...state, sending: false, sendingError: null, message: ''};
    case 'CHAT_MESSAGE_UPDATE':
    return {...state, sending: false, sendingError: null, message: action.text};
    case 'CHAT_LOAD_MESSAGES_SUCCESS':
    return {...state, sending: false, message: action.messages, loadMessagesError: null};
    case 'CHAT_LOAD_MESSAGES_ERROR':
    return {...state, sending: false, messages: null, loadMessagesError: action.error};
    default:
    return state  
  }
}

export default chatReducer;