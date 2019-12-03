import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/CustomButtonStyles';

const CustomButton = ({onPress, title, color}) => {
  return(
    <TouchableOpacity
      style={color === 'black' ? styles.blackCustomButton : styles.redCustomButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
    )
}            
export default CustomButton;