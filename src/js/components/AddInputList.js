import React from 'react';
import { Text, TextInput, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles/AddInputListStyles';

const AddInputList =({icon, label, value, onChangeText})=> {
  return (   
    <View>
      <Ionicons 
        size={26} 
        style={styles.categoryIcon} 
        name={Platform.OS === 'ios' ? 
        `ios-${icon}` : 
        `md-${icon}`}
      /> 
      <Text style={styles.labelText}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        onChangeText={onChangeText}
        value={value}
      />
    </View> 
  )
}
export default AddInputList;
