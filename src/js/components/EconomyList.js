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
              <View 
                style={styles.dateAndverticalLineContainer}
              >
                <Text style={styles.dateText}>
                  {item.date}
                </Text>
                <View style={styles.verticalLine} />
              </View>              
              <View style={styles.iconContainer}> 
                <Ionicons
                  style={styles.categoryIcon}
                  name={Platform.OS === 'ios' 
                  ? 'ios-calendar' 
                  : 'md-calendar'}
                />
              </View>
              <View style={styles.categoryContainer}>             
                <Text style={styles.categoryText}>
                  {item.category}
                </Text>              
                <Text style={styles.categoryDateText}>
                  {item.date}
                </Text>
              </View>
              <Text style={styles.incomeExpencesText}>
                -100
              </Text>
              <Text style={styles.currencyText}>
                kr
              </Text>
            </View>  
          )
        }} 
      />
    </View>
  );  
}            
export default EconomyList;