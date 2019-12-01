import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    // paddingTop: Dimensions.hp(30),
    backgroundColor: Colors.mainGreenColor,
    height: Dimensions.hp(100),
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 30,
    backgroundColor: Colors.mainBlackColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  totalEconomyViewContainer: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  totalLabel: {
    color: Colors.mainWhiteColor,
    fontFamily: Fonts.headText,
    fontSize: 15
  },
  incomeLabel: {
    color: Colors.mainGreenColor,
    fontFamily: Fonts.headText,
    fontSize: 14
  },
  expencesLabel: {
    color: Colors.highlightYellow,
    fontFamily: Fonts.headText,
    fontSize: 14
  }


})