import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  blackCustomButton: {
    marginTop: Dimensions.wp(15),
    backgroundColor: Colors.mainBlackColor,
    height: 50,
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
    color: Colors.mainWhiteColor,
    fontFamily: Fonts.headText,
    fontSize: 18,
    letterSpacing: 2
  },
  blueCustomButton: {
    marginTop: 'auto',
    backgroundColor: Colors.highlightBlue,
    marginTop: Dimensions.wp(15),
    height: 50,
  },
  abledButton: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1
  },
  disabledButton: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6
  },
  titleAndIconButtonContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 5,
    color: Colors.mainWhiteColor,
  }
})