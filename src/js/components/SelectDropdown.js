import React from 'react';
import PropTypes from 'prop-types'; 
import {
  Text,
  View,
  Platform,
  TextInput,
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Dimensions from '../constants/Dimensions';
import { styles } from '../../styles/AddScreenStyles';
import ModalDropdown from 'react-native-modal-dropdown';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const SelectDropdown = ({ 
  placeHolder, 
  defaultValue, 
  options, 
  onSelect
  }) => {
  return (
    <View style={styles.dropDownAndIconContainer}>
      <View style={styles.labelInputBox}>
        <Text style={styles.labelText}>
          { placeHolder}
        </Text>
        <ModalDropdown
          style={styles.dropDown}
          defaultValue={defaultValue}
          defaultIndex={-1}
          ref={this.dropDownRef}
          options={options}
          dropdownTextStyle={{
            fontSize: 14, 
            textAlign: 'left',
            color: Colors.subGrayColor,
            fontFamily: Fonts.subText
          }}
          dropdownStyle={{      
            width: Dimensions.wp(43),
            margin: 0,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowRadius: 20,
            shadowOpacity: 1,
          
          }}
          textStyle = {{
            textAlign: 'left',
            color: Colors.subGrayColor,
            fontFamily: Fonts.subText, 
            fontSize: 14
          }}
          onSelect={onSelect}
        />
      </View>
    </View>
  )
}
export default SelectDropdown;