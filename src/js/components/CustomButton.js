import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/CustomButtonStyles';

const CustomButton = ({onPress, title, color, buttonStatus}) => {
  return(
    <TouchableOpacity
      disabled={buttonStatus} 
      style={[
        color === 'black' ? 
        styles.blackCustomButton : 
        styles.redCustomButton, 
        buttonStatus === true ? 
          styles.disabledButton : 
          styles.abledButton,]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
    )
}

export default CustomButton;