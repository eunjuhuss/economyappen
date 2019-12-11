import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { styles } from '../../styles/ProfileScreenStyles';
import SettingList from '../components/SettingList';

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
            <SettingList 
              icon={'key'}
              color={'#E5E13C'}
              label={'Change Password'}
              onPress={()=>this.props.navigation.navigate('Feed')}
            />
            <SettingList 
              icon={'contacts'}
              color={'#8CE1AD'}
              label={'Invite friends'}
              onPress={()=>this.props.navigation.navigate('Feed')}
            />
            <SettingList 
              icon={'log-out'}
              color={'#F64336'}
              label={'Logout'}
              onPress={()=>this.props.navigation.navigate('Feed')}
            />
            
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