import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/EconomyListsStyles';
import LabelIcon from '../components/LabelIcon';
import FunctionIcon from '../components/FunctionIcon';
import Swipeout from 'react-native-swipeout'
import { Ionicons } from '@expo/vector-icons';
import ImageBox from '../components/ImageBox';
import Colors from '../constants/Colors';


class EconomyList extends React.Component {
  renderItem = ({item}) => {
    const { navigation, deleteEconomyList } = this.props;
    const SwipeoutLeftButton = [
      {
        text: 'Edit',
        type: 'primary',
        onPress: () => { navigation.navigate('SingleEconomyList',{...item}) },
        component: (
          <Ionicons
            size={26}
            style={styles.icon}
            name={Platform.OS === 'ios' ?
              `ios-create` : 
              `md-create`}
          />
        )
      }
      ]

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
      onPress: () => { 
        deleteEconomyList(item.uid) 
      },
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

  const statusStyles = (item)=> {   
    if(item.expence === true){
      return { color: Colors.highlightRed }
    } 
    else if(item.income === true){
      return { color: Colors.mainBlackColor }
    }
  }

  return(

    <Swipeout
      autoClose={true}
      left={SwipeoutLeftButton}
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
        {/* <ImageBox 
          userId={item.uid}
        /> */}
        <View style={styles.categoryAndDateContainer}>
          {
            item.category ?(
            <Text style={styles.categoryText}>
              {item.category}
            </Text>  
            ):(
              null
            )
          }             
          <Text style={styles.categoryDateText}>
            {item.paymentMethod}
          </Text>
        </View>
        <Text style={[statusStyles(item),styles.priceText]}>
          {item.price} kr
        </Text>
      </View>
    </Swipeout>
    )
  }

render(){
const { listOfEconomy } = this.props; 
  return (    
    <View style={styles.economyListsContainer}>
      { listOfEconomy ? (
        <FlatList 
          data={listOfEconomy}
          keyExtractor={(item) => item.uid}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem.bind(this)} 
        /> 
      ):( 
      null
      )
    }    
    </View>    
  );  
}
}            
export default EconomyList;
