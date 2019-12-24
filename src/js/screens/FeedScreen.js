import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  CheckBox,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import EconomyList from './../components/EconomyList';
import { styles } from '../../styles/FeedScreenStyles';
import { getEconomyList, deleteEconomyList } from '../redux/store/actions/economyActions';
import FeedHeader from '../components/headers/FeedHeader';
import { connect } from 'react-redux';
import _ from 'lodash';
import Colors from '../constants/Colors';

class FeedScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      all: true,
      expence: false,
      income: false,
      filteredEconomyLists:{}     
    }  
  }

  componentDidMount(){
    this.props.getEconomyList();
    console.log('this.state.filteredEconomyLists', this.state.filteredEconomyLists)
    
  }
  navigateToAddScreen=()=>{
    this.props.navigation.navigate('Add')
  }

  checkedAll=()=>{
    const { economyList }= this.props;
    this.setState({
      all: true,
      income: false,
      expence: false,
      filteredEconomyLists: economyList
    })
  }

  checkedExpence=()=>{
    const { economyList }= this.props;
    const expenceResult = economyList.filter(
        item=>item.expence === true
        )
          this.setState(
          {
            filteredEconomyLists: expenceResult
          }
        )
       
    this.setState({
      all: false,
      income: false,
      expence: true
    })
 }
  checkedIncome=()=>{
    const { economyList }= this.props;
    const incomeResult = economyList.filter(
        item=>item.income === true
        )
          this.setState(
          {
            filteredEconomyLists: incomeResult
          }
        )
    this.setState({
      all: false,
      income: true,
      expence: false
    })
 }
  

  render() {
    const { navigation } = this.props;
    const { all, income, expence }= this.state;

    const checkedAllStyle = () => {     
      if(all === true){
        return{ color: Colors.highlightBlue }
      }else if(all === false){
        return{ color: Colors.subGrayColor }
      }
    }

    const checkedIncomeStyle = () => {     
      if(income === true){
        return{ color: Colors.highlightBlue }
      }else if(income === false){
        return{ color: Colors.subGrayColor }
      }
    }

    const checkedExpenceStyle = () => {
      if(expence === true){
        return{ color: Colors.highlightBlue }
      }else if(expence === false){
        return{ color: Colors.subGrayColor }
      }
    }
 
    return (     
      <View 
        elevation={5} 
        style={styles.container}
      >
        <TouchableOpacity
          onPress={()=>this.navigateToAddScreen()}
          style={styles.floatingTouchableButton}>
          <View style={styles.floatingAddButton}>
            <Text style={styles.floatingButtonText}>
              +
            </Text>
          </View>
        </TouchableOpacity>  
      { this.props.loadingReducer ? 
        <ActivityIndicator
          size='large' 
          style={styles.loading}
        /> 
        :
        <ScrollView>            
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={this.state.all}
          
               onValueChange={()=>this.checkedAll()
            }
            />
          <Text style={[
              checkedAllStyle(), 
              styles.expencesLabel
            ]}
          >
            ALL
          </Text>
          <CheckBox
            value={this.state.expence}
            onValueChange={()=>this.checkedExpence()
            }
          />
          <Text style={[
              checkedExpenceStyle(), 
              styles.expencesLabel
            ]}
          >
            EXPENCES
          </Text>
          <CheckBox 
            value={this.state.income}
            onValueChange={()=>this.checkedIncome()
            }
          />
          <Text style={[
            checkedIncomeStyle(),
            styles.incomeLabel]}
          >
            INCOME
          </Text> 
        </View>
        { this.state.filteredEconomyLists ? (
          <EconomyList
            navigation={navigation}
            listOfEconomy={this.state.filteredEconomyLists}
            deleteEconomyList={this.props.deleteEconomyList}
          />
          ):(
          <EconomyList
            navigation={navigation}
            listOfEconomy={this.props.economyList}
            deleteEconomyList={this.props.deleteEconomyList}
          />
        )}
        </ScrollView>
        }         
      </View>
    );
  }
}

FeedScreen.navigationOptions = {
  header: <FeedHeader />
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

export default connect(mapStateToProps, {getEconomyList, deleteEconomyList})(FeedScreen);
