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

const EconomyList = ({listOfEconomy}) => {  

  return (
      <FlatList 
        data={listOfEconomy}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> {
          return (
            <View style={styles.itemContainer}>
              <Text>
                {item.date}
                {item.category}
              </Text>
            </View>  
          )
        }} 
      />    
      
  );  
}                 

export default EconomyList;