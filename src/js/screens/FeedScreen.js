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
      all: false,
      expence: false,
      income: false     
    }  
  }

  componentDidMount(){
    this.props.getEconomyList();    
  }
  navigateToAddScreen=()=>{
    this.props.navigation.navigate('Add')
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
              onValueChange={
              value => this.setState({
                  all: !all,
                  income: this.state.income,
                  expence: this.state.expence
                })
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
            onValueChange={
            value => this.setState({
                expence: !expence,
                income: this.state.income,
                all: this.state.all
              })
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
            onValueChange={
            value => this.setState({
                income: !income,
                expence: this.state.expence,
                all: this.state.all
              })
            }
          />
          <Text style={[
            checkedIncomeStyle(),
            styles.incomeLabel]}
          >
            INCOME
          </Text> 
        </View>
                <EconomyList
                  navigation={navigation}
                  listOfEconomy={this.props.economyList}
                  deleteEconomyList={this.props.deleteEconomyList}
                />
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
