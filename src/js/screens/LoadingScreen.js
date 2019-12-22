import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import Firebase from '../constants/Firebase';

class LoadingScreen extends React.Component {
  componentDidMount(){
    this.checkIfLoggedIn();
}

  checkIfLoggedIn=()=>{
    Firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.navigation.navigate('Feed', {user})
      } else{
          this.props.navigation.navigate('Login')
        }
    });
  }
  render(){
    return ( 
      <View>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
}
export default LoadingScreen;