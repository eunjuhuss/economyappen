import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { styles } from '../../styles/ProfileScreenStyles';
import SettingList from '../components/SettingList';
import { getEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import _ from 'lodash';

class ProfileScreen extends React.Component {
  componentDidMount(){
    this.props.getEconomyList();    
  }

  render() {
    const { economyList } = this.props;
    const filteredExpence = economyList.filter(
      list => list.expence === true
    );
    const totalExpencePrice = filteredExpence.reduce(
      (sum, item) => sum + parseInt(item.price, 10) ,0
    );
    const filteredIncome = economyList.filter(
      list => list.income === true
    );
    const totalIcnomePrice = filteredIncome.reduce(
      (sum, item) => sum + parseInt(item.price, 10) ,0
    );

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
                <Text style={styles.totalText}>{totalIcnomePrice}</Text>
                <Text style={styles.labelText}>INCOMES</Text>
              </View>
              <View style={styles.totalAndLabelContainer}>
                <Text style={styles.totalText}>{totalExpencePrice}</Text>
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

const mapStateToProps = (state) => {
  const economyList = _.map(state.economyList, (value, uid)=> {
    return { 
      ...value, 
      uid 
    };
  });
  return {
    economyList,
    loadingReducer: state.loadingReducer.loadingReducer
  } 
}

export default connect(mapStateToProps, {getEconomyList})(ProfileScreen);