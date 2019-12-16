import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  recieptImage: {
    width: 100, 
    height: 100, 
    zIndex: 1,
    borderRadius: 10
  },
  imageAddButton: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.subGrayColor
  },
  imageButtonText: {
    fontSize: 30,
    color: Colors.subGrayColor,
    position: 'absolute',
    bottom: 50
  }
})