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
import _ from 'lodash';
import Colors from '../constants/Colors';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { styles } from '../../styles/FeedScreenStyles';
import EconomyList from './../components/EconomyList';
import FeedHeader from '../components/headers/FeedHeader';
import * as economyActions from '../redux/store/actions/economyActions';

class FeedScreen extends React.Component {
  constructor(props){    
    super(props)
    this.state = {
      all: true,
      expence: false,
      income: false,
      filteredEconomyLists: {}    
    }  
  }

  componentDidMount(){
    this.props.getEconomyList();
  }

  navigateToAddScreen = () => {
    this.props.navigation.navigate('Add')
  }

  checkedExpence = () => {
    const { economyList } = this.props;
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

  renderCheckBox =()=>{
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

    return(   
      <View style={styles.checkboxContainer}>  
        <CheckBox
          value={this.state.all}          
          onValueChange={value=>this.setState({
            all: true,
            income: false,
            expence: false
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
        onValueChange={()=>this.checkedExpence()
        }
      />
      <Text style={[
        checkedExpenceStyle(), 
        styles.expencesLabel]}
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
    )
  }  

  render() {
    const { navigation } = this.props;
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
      { !this.props.loadingReducer ? 
        <ActivityIndicator
          size='large' 
          style={styles.loading}
        /> 
        :
        <ScrollView> 
          <View>
            {this.renderCheckBox()}
          </View>
          {
            this.state.all === true ? (
            <EconomyList
              navigation={navigation}
              listOfEconomy={this.props.economyList}
              deleteEconomyList={this.props.deleteEconomyList}
            />
            ):(
              <EconomyList
                navigation={navigation}
                listOfEconomy={this.state.filteredEconomyLists}
                deleteEconomyList={this.props.deleteEconomyList}
              />
            )
          }
        </ScrollView>
        }         
      </View>
    );
  }
}

FeedScreen.navigationOptions = {
  header: <FeedHeader />
};

FeedScreen.propTypes = {
  economyList: PropTypes.array
}

const mapStateToProps = state => {
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

const mapDispatchToProps = dispatch => ({
  getEconomyList: () => {
    dispatch(economyActions.getEconomyList());
  },
  deleteEconomyList: uid => {
    dispatch(economyActions.deleteEconomyList(uid));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);