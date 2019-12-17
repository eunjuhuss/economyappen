import React from 'react';
import {    
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/WelcomeScreenStyles';
import CustomButton from '../components/CustomButton';

class WelcomeScreen extends React.Component {

  navigateToLogin =()=>{
    this.props.navigation.navigate('Login');
  }

  render() {
    return (    
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>
                Nice to Meet You, Let's start!
              </Text> 
              <CustomButton
                icon={'checkmark'}
                buttonStatus={false} 
                color={'black'}
                title='Take me to Login'
                onPress={()=>this.navigateToLogin()}
                />             
            </View>
          </ScrollView>
      </View>
    );
  }
}

WelcomeScreen.navigationOptions = {
    header: null,
};
export default WelcomeScreen;