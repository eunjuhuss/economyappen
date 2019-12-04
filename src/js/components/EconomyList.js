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

const EconomyList = ({listOfEconomy, navigation,deleteEconomyList}) => {
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
              <FunctionIcon 
                type={'create'} 
                onPress={()=>navigation.navigate('Edit',{...item})}
              />  
              <FunctionIcon 
                type={'close'} 
                onPress={()=>deleteEconomyList(item.key)}
              />  
            </View>  
          )
        }} 
      />
    </View>
  );  
}            
export default EconomyList;
