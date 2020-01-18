import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  TextInput, 
  TochableOpacity, 
  View,
  Text 
} from 'react-native';
// import { sendMessage, updateMessage } from '../redux/store/actions/chatActions';
import { connect } from 'react-redux';
import { getAllUsers } from '../redux/store/actions/userActions';
import { styles } from '../../styles/ChatScreenStyles';
import Firebase from '../constants/Firebase';
import ChatHeader from '../components/headers/ChatHeader';
import _ from 'lodash';


const OPACITY_ENABLED = 1.0
const OPACITY_DISABLED = 0.2

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount(){
    this.props.getAllUsers();
    console.log('this.props.getAllUsers()', this.props.users.users);
  }

  // componentWillMount(){
  //   const allUsers = Firebase.database().ref('/users/');
  //   allUsers.once('value').then(snapshot => {
  //       this.setState({ users: snapshot.val() })
  //       console.log('users', this.state.users)
  //   });
  // }

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
    <View 
      elevation={5}  
      style={styles.container}
    >
    <ScrollView >
      <Text>
        {this.props.users.email}
      </Text>
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

const mapStateToProps = (state) => {
  const users = _.map(state.userReducer, value => {
    return { 
      ...value
    };
  });

  return {
    users
  } 
}


// const mapStateToProps = (state) => {
//   const users = _.map(state.users, (value)=> {
//     return { 
//       ...value
//     };
//   });

//   return {
//     users,
//     loadingReducer: state.loadingReducer.loadingReducer
//   } 
// }

export default connect(mapStateToProps, { getAllUsers })(ChatScreen);


// const mapStateToProps = (state) => {
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
// export default ChatScreen;