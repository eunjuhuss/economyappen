import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainWhiteColor,    
    width: Dimensions.wp(100)
  },
  topTriangle: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'transparent', 
    borderStyle: 'solid', 
    justifyContent: 'flex-end',
    borderRightWidth: 80, 
    borderTopWidth: 100, 
    borderRightColor: 'transparent', 
    borderTopColor: Colors.mainGreenColor,
  },
  bottomTriangle: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent', 
    borderStyle: 'solid', 
    justifyContent: 'flex-start',
    borderRightWidth: 80, 
    borderTopWidth: 100, 
    borderRightColor: 'transparent', 
    borderTopColor: Colors.mainGreenColor,
    transform: [{ rotate: '180deg'}]
  },
  labelText: {
    marginTop: 20,
    marginBottom: 10,
    color: Colors.subGrayColor,
    fontFamily: Fonts.headText
  },
  contentContainer: {
    backgroundColor: 'transparent', 
  },
  inputContainer: {
    width: Dimensions.wp(90)
  },
  welcomeTextContainer: {
    flexDirection: 'row',
    paddingBottom: 30

  },
  helloText: {
    fontSize: 50,
    color: Colors.mainBlackColor,
    fontFamily: Fonts.headText,
    
  },
  dotText: {
    fontSize: 50,
    color: Colors.mainGreenColor,
    fontFamily: Fonts.headText,
    
  },
  registerContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10
  },
  registerInfoText: {
    color: Colors.mainWhiteColor,
    fontFamily: Fonts.subText,
    fontSize: 14
  },
  signUpText: {
    color: Colors.highlightYellow,
    fontFamily: Fonts.headText,
    fontSize: 15
  },
  errorText: {
    color: Colors.highlightRed,
    fontFamily: Fonts.subText
  }
})