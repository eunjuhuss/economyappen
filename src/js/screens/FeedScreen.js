import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import EconomyList from './../components/EconomyList';
import { styles } from '../../styles/FeedScreenStyles';
import { getEconomyList, deleteEconomyList } from '../redux/store/actions/economyActions';
import FeedHeader from '../components/headers/FeedHeader';
import { connect } from 'react-redux';
import _ from 'lodash';

class FeedScreen extends React.Component {
  componentDidMount(){
    this.props.getEconomyList();
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props.loadingReducer)
    return (
      <View style={styles.container}>
      { this.props.loadingReducer ? <Text> Loading...</Text> 
      : <ScrollView
          contentContainerStyle={styles.contentContainer}>
            <View style={styles.totalEconomyViewContainer}>
              <Text style={styles.totalLabel}>TOTAL</Text>
              <Text style={styles.incomeLabel}>INCOME</Text> 
              <Text style={styles.expencesLabel}>EXPENCES</Text> 
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
  const economyList = _.map(state.economyList.economyList, (value, key)=> {
    return {
      ...value,
      key:key
    }
  })
  return {
    economyList,
    loadingReducer: state.loadingReducer.loadingReducer
  } 
}

export default connect(mapStateToProps, {getEconomyList, deleteEconomyList})(FeedScreen);
