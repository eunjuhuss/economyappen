import React from 'react';
import {
  Platform
} from 'react-native';
import { styles } from '../../styles/FunctionIconStyles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FunctionIcon = ({type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}> 
      <Ionicons
        style={styles.icon}
        name={Platform.OS === 'ios' ?
          `ios-${type}` : 
          `md-${type}`}
      />
    </TouchableOpacity>
  )
}            
export default FunctionIcon;