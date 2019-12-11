import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { styles } from '../../styles/ProfileScreenStyles';

class ProfileScreen extends React.Component {

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
ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;