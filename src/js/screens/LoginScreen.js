import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native';
import * as firebase from 'firebase';
import { styles } from '../../styles/LoginScreenStyles';
// import { connect } from 'react-redux';
// import { setUserName, watchUserData } from './../redux/app-redux';

// const mapStateToProps = (state) => {
//   return {
//     name: state.name,
//     userData: state.userData
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserName: (text) => { dispatch(setUserName(text)) },
//     watchUserData: () => { dispatch(watchUserData())},
//   };
// }

export default class LoginScreen extends React.Component {
  constructor(props){

  super(props);
  // this.state = {
  //   name: this.props.name
  // }
  // this.props.watchUserData();
}
  render() {

    // onSignOut = () => {
    //   firebase.auth().signOut();
    // }

    // login = () => {
    //   this.props.setUserName(this.state.name);
    // }

    onPressLogin=()=>{
      this.props.navigation.navigate('Feed');
    }

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
            <Text style={styles.labelText}>
              Username:
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Username'
            />

            <Text style={styles.labelText}>
              Password:
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Password'
            />

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => onPressLogin()} 
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TextInput 

              // onChangeText={(text)=> { this.setState({name: text})}}
              />
            <TouchableOpacity
            
              // onPress={()=>login()} 
            />
            {/* <Text>{this.props.userData.name}</Text> */}
        </ScrollView>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  header: null,
};


// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
