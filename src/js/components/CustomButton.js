import React from 'react';
import {
  Text,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles/CustomButtonStyles';

const CustomButton = ({onPress, title, icon, color, buttonStatus}) => {
  return(
    <TouchableOpacity
      disabled={buttonStatus} 
      style={[
        color === 'black' ? 
        styles.blackCustomButton : 
        styles.blueCustomButton, 
        buttonStatus === true ? 
          styles.disabledButton : 
          styles.abledButton]}
      onPress={onPress}
    >
    <View style={styles.titleAndIconButtonContainer}>   
      <Text style={styles.buttonText}>
        {title}
      </Text>
      {
        buttonStatus === false ?     
        (
          <Ionicons
            size={22}
            style={styles.icon}
            name={Platform.OS === 'ios' ?
              `ios-${icon}` : 
              `md-${icon}`}
          />
        ):(
        null
        )
      }
      </View>
    </TouchableOpacity>
    )
}

export default CustomButton;