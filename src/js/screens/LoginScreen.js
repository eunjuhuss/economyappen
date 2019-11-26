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
import { connect } from 'react-redux';
import { setUserName, watchUserData } from './../redux/app-redux';

const mapStateToProps = (state) => {
  return {
    name: state.name,
    userData: state.userData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (text) => { dispatch(setUserName(text)) },
    watchUserData: () => { dispatch(watchUserData())},
  };
}

class LoginScreen extends React.Component {
  constructor(props){

  super(props);
  this.state = {
    name: this.props.name
  }
  this.props.watchUserData();
}
  render() {

    onSignOut = () => {
      firebase.auth().signOut();
    }

    login = () => {
      this.props.setUserName(this.state.name);
    }

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <TouchableOpacity title="SignOut" onPress={()=>onSignOut()} />
            <Text>{this.props.name}</Text>

            <TextInput 
              style={{borderWidth:1, width: 200, height: 40}}
              value={this.state.name}
              onChangeText={(text)=> { this.setState({name: text})}}/>
            <TouchableOpacity
              style={styles.button} 
              title="Name" 
              onPress={()=>login()} 
            />
            <Text>{this.props.userData.name}</Text>
         
        </ScrollView>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  button: {
    width: 80,
    height: 20,
    backgroundColor: 'yellow'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
