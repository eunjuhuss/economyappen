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
  // blackLineCustomButton: {
  //   backgroundColor: Colors.mainGreenColor,
  //   borderRadius: 40,
  //   height: 80,
  //   justifyContent: 'center',
  //   alignItems: 'center'  
  // },
  // blackLineButtonText: {
  //   color: Colors.mainBlackColor,
  //   fontFamily: Fonts.headText,
  //   fontSize: 18
  // },
  buttonText: {
    color: Colors.highlightYellow,
    fontFamily: Fonts.headText,
    fontSize: 18
  },
  redCustomButton: {
    marginTop: 'auto',
    backgroundColor: Colors.highlightRed,
    marginTop: Dimensions.wp(15),
    borderRadius: 40,
    height: 80,
  },
  abledButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    opacity: 1
  },
  disabledButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    opacity: 0.6
  },
})