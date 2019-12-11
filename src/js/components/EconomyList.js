import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { styles } from '../../styles/EconomyListsStyles';
import LabelIcon from '../components/LabelIcon';
import FunctionIcon from '../components/FunctionIcon';
import Swipeout from 'react-native-swipeout'
import { Ionicons } from '@expo/vector-icons';

class EconomyList extends React.Component {


  renderItem = ({item}) => {
    const {navigation, deleteEconomyList} = this.props;

    const SwipeoutButton = [
      {
        text: 'Edit',
        type: 'edit',
        onPress: () => { navigation.navigate('Edit',{...item}) },
        component: (
          <Ionicons
            size={26}
            style={styles.icon}
            name={Platform.OS === 'ios' ?
              `ios-create` : 
              `md-create`}
          />
        )
      },
    {
      text: 'Delete',
      type: 'delete',
      onPress: () => { deleteEconomyList(item.uid) },
      component: (
      <Ionicons
        size={26}
        style={styles.icon}
        name={Platform.OS === 'ios' ?
          `ios-trash` : 
          `md-trash`}
      />
      )
    }
  ]

  return(
    <Swipeout
      autoClose={true}
      right={SwipeoutButton}
      style={styles.swipeout}
    >
      <View style={styles.itemContainer}>
        <View 
          style={styles.dateAndverticalLineContainer}
        >
          <Text style={styles.dateText}>
            {item.date}
          </Text>
          <View style={styles.verticalLine} />
        </View>              
        <LabelIcon type={'briefcase'}/>       
        <View style={styles.categoryContainer}>             
          <Text style={styles.categoryText}>
            {item.category}
          </Text>              
          <Text style={styles.categoryDateText}>
            {item.date}
          </Text>
        </View>
        <Text style={styles.incomeExpencesText}>
          {item.expences}
        </Text>
        <Text style={styles.currencyText}>
          kr
        </Text>
      </View>  
    </Swipeout>
    )
  }  

render(){
const { listOfEconomy } = this.props;   
  return (
    <View style={styles.economyListsContainer}>    
      <FlatList 
        data={listOfEconomy}
        keyExtractor={(item) => item.uid}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderItem.bind(this)} 
      />    
    </View>
  );  
}
}            
export default EconomyList;
