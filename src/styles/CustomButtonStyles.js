import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  blackCustomButton: {
    marginTop: Dimensions.wp(15),
    backgroundColor: Colors.mainBlackColor,
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'  
  },
  buttonText: {
    color: Colors.highlightYellow,
    fontFamily: Fonts.headText,
    fontSize: 18
  },
  redCustomButton: {
    marginTop: Dimensions.wp(15),
    backgroundColor: Colors.highlightRed,
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'  
  }
})