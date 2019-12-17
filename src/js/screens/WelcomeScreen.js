import React from 'react';
import {    
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/WelcomeScreenStyles';

class WelcomeScreen extends React.Component {

  render() {
    return (    
      <View style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.contentContainer}>

            
        </ScrollView>
      </View>
    );
  }
}

WelcomeScreen.navigationOptions = {
    header: null,
};
export default WelcomeScreen;