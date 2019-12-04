import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.hp(30),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainGreenColor
  },
  contentContainer: {
    paddingTop: 30,
  },
  labelText: {
    marginTop: 20,
    marginBottom: 10,
    color: Colors.subGrayColor,
    fontFamily: Fonts.headText
  },
  input: {
    width: Dimensions.wp(70),
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: Colors.mainWhiteColor,
    fontFamily: Fonts.subText
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
  }
})