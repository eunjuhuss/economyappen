import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { styles } from '../../styles/ProfileScreenStyles';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.contentContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userEmailText}>
              user@email.com
            </Text>
            <View style={styles.incomeAndExpenceContainer}>
              <View style={styles.totalAndLabelContainer}>
                <Text style={styles.totalText}>34000</Text>
                <Text style={styles.labelText}>INCOMES</Text>
              </View>
              <View style={styles.totalAndLabelContainer}>
                <Text style={styles.totalText}>34000</Text>
                <Text style={styles.labelText}>EXPENCES</Text>
              </View>
            </View>
          </View>
          <View style={styles.settingListContainer}>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}
ProfileScreen.navigationOptions = {
  header: null
};

export default ProfileScreen;