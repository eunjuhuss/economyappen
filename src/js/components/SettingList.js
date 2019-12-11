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
import { styles } from '../../styles/SettingListStyles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const SettingList = ({icon, label, onPress, color}) => {
  return (
    <View style={styles.singleListContainer}> 
      <View style={[styles.iconContainer, {backgroundColor:color}]}>
        <Ionicons
          size={20}
          style={styles.icon}
          name={Platform.OS === 'ios' ?
            `ios-${icon}` : 
            `md-${icon}`}
        />
      </View>
      <Text style={styles.labelText}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          size={20}
          style={styles.arrowForwardIcon}
          name={Platform.OS === 'ios' ?
            `ios-arrow-forward` : 
            `md-arrow-forward`}
        />
      </TouchableOpacity>
    </View>
  )
}            
export default SettingList;