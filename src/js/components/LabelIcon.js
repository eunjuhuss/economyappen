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
import { styles } from '../../styles/LabelIconStyles';
import { Ionicons } from '@expo/vector-icons';

const LabelIcon = ({type}) => {
  return (
    <View style={styles.iconContainer}> 
      <Ionicons
        style={styles.icon}
        name={Platform.OS === 'ios' ?
          `ios-${type}` : 
          `md-${type}`}
      />
    </View>
  )
}            
export default LabelIcon;