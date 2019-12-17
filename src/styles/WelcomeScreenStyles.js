import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.hp(10),
    paddingLeft: Dimensions.wp(5),
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.mainGreenColor
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    width: Dimensions.wp(70),
  },
  welcomeText: {
    fontSize: 50,
    color: Colors.mainBlackColor,
    fontFamily: Fonts.headText,
  }
})