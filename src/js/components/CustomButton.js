import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/CustomButtonStyles';

const CustomButton = ({onPress, title}) => {
  return(
    <TouchableOpacity
      style={styles.CustomButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
    )
}            
export default CustomButton;