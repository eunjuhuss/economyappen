import React from 'react';
import PropTypes from 'prop-types'; 
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import Dimensions from '../constants/Dimensions';
import { styles } from '../../styles/AddScreenStyles';

import ModalDropdown from 'react-native-modal-dropdown';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';



const SelectDropdown = ({defaultValue, options, onSelect}) => {
  return (
    <ModalDropdown
      style={styles.dropDown}
      defaultValue = {defaultValue}
      defaultIndex={-1}
      ref={this.dropDownRef}
      options={options}
      dropdownTextStyle={{
        fontSize: 16, 
        textAlign: 'center',
        color: Colors.subGrayColor,
        fontFamily: Fonts.subText
      }}
      dropdownStyle={{      
        width: Dimensions.wp(90),
        borderRadius: 6,
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
  )
}
export default SelectDropdown;