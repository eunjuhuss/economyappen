import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { styles } from '../../styles/ProfileScreenStyles';
import SettingList from '../components/SettingList';
import * as economyActions from '../redux/store/actions/economyActions';
import * as userActions from '../redux/store/actions/userActions';
import { connect } from 'react-redux';
import _ from 'lodash';
import ImageBox from '../components/ImageBox';
import Firebase from '../constants/Firebase';

class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      totalExpencePrice: '',
      totalIcnomePrice:''    
    }  
  }

  componentDidMount(){
    this.props.getEconomyList(); 
    this.checkUserId();
    this.calculateIncomeAndExpence();
  }

  calculateIncomeAndExpence=()=>{
    const { economyList } = this.props;
    const filteredExpence = economyList.filter(
      list => list.expence === true
    );
    const totalExpencePrice = filteredExpence.reduce(
      (sum, item) => sum + parseInt(item.price, 10) ,0
    );
    this.setState({
      totalExpencePrice: totalExpencePrice
    })
    const filteredIncome = economyList.filter(
      list => list.income === true
    );
    const totalIcnomePrice = filteredIncome.reduce(
      (sum, item) => sum + parseInt(item.price, 10) ,0
    );
    this.setState({
      totalIcnomePrice: totalIcnomePrice
    })
  }

  checkUserId=()=>{
    Firebase.auth().onAuthStateChanged(user => {
    this.setState({ 
      user: user
      });
    });
  }  

  logout=()=>{
    this.props.logout();
  }

  resetPassword=()=>{
    this.props.resetPassword(this.state.user.email);
  }

  render() {
    const { 
      user, 
      totalExpencePrice,
      totalIcnomePrice 
      } 
    = this.state;

    return (
      <View 
        elevation={5} 
        style={styles.container}
      >
        <ScrollView
            contentContainerStyle={styles.contentContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userEmailText}>
              {user.email}
            </Text>
            <View style={styles.imageBoxcontainer}>
              <ImageBox />
            </View>
            <View style={styles.incomeAndExpenceContainer}>
              <View style={styles.totalAndLabelContainer}>
                <Text style={styles.totalText}>
                  {totalIcnomePrice}
                </Text>
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
              onPress={()=>this.resetPassword()}
            />
            <SettingList 
              icon={'log-out'}
              color={'#F64336'}
              label={'Logout'}
              onPress={()=>this.logout()}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getEconomyList: ()=>dispatch(economyActions.getEconomyList()),
    logout: () => dispatch(userActions.logout()),
    resetPassword: (email) => dispatch(userActions.resetPassword(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);