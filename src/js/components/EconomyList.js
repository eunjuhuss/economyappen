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
import { Ionicons } from '@expo/vector-icons';

const EconomyList = ({listOfEconomy}) => {  

  return (
    <View style={styles.economyListsContainer}>
      <FlatList 
        data={listOfEconomy}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> {
          return (
            <View style={styles.itemContainer}>
              <Ionicons
                style={styles.categoryIcon}
                name={Platform.OS === 'ios' 
                ? 'ios-calendar' 
                : 'md-calendar'}
              />         
              <Text style={styles.dateText}>
                {item.date}
              </Text>
              <Text style={styles.categoryText}>  {item.category}
              </Text>

                
              
            </View>  
          )
        }} 
      />
    </View>   
      
  );  
}                 

export default EconomyList;