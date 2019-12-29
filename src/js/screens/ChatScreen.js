import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  TextInput, 
  TochableOpacity, 
  View 
} from 'react-native';
// import { sendMessage, updateMessage } from '../redux/store/actions/chatActions';
import { connect } from 'react-redux';
import { styles } from '../../styles/ChatScreenStyles';
import Firebase from '../constants/Firebase';
import ChatHeader from '../components/headers/ChatHeader';


const OPACITY_ENABLED = 1.0
const OPACITY_DISABLED = 0.2

class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: []
        }    
    }

  componentWillMount(){
    const allUsers = Firebase.database().ref('/users/');
    allUsers.once('value').then(snapshot =>{
        this.setState({ users: snapshot.val() })
        console.log('users',this.state.users)
    });
  }

    // handleMessageChange = (message) => {
    //   this.props.updateMessage(message)
    // }

    // handleButtonPress = () => {
    //   this.props.sendMessage(this.props.message)
    // }

    // componentDidUpdate(presProps){
    //   if(!prevProps.sendingError && this.props.sendingError){
    //     alert(this.props.sendingError)
    //   }
    // }

  render() {
    // const sending = this.props.sending;
    // const isButtonDisabled = sending|| this.props.message.trim().length == 0
    // const opacity = isButtonDisabled ? OPACITY_DISABLED: OPACITY_ENABLED
  return (
    <View style={styles.container}>
    <ScrollView >
      {/* <TextInput 
        style={styles.textInput}
        placeholder={'message'}
        returnKeyType={'send'}
        onChangeText={()=>this.handleMessageChange}
        value={this.props.message}
        underlineColorAndroid={'transparent'}
        editable={!sending}
      />
      <TochableOpacity 
        style={styles.button}
        onPress={()=>this.handleButtonPress()}
        disabled={isButtonDisabled} 
      />*/}

    </ScrollView>
    </View>
    );
  }
}
ChatScreen.navigationOptions = {
  title: 'Chat'
};

ChatScreen.navigationOptions = {
  header: <ChatHeader />
};

// const mapStateToProps =(state)=>{
//     return { 
//         sending: state.chatReducer.sending,
//         sendingError: state.chatReducer.sendingError,
//         message: state.chatReducer.message
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => dispatch(sendMessage()),
//         updateMessage: () => dispatch(updateMessage())
//     } 
// }







// export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
export default ChatScreen;