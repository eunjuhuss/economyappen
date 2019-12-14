import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.mainGreenColor,
    height: Dimensions.hp(100)
    },
  loading:{
    color: Colors.mainBlackColor
  },
  contentContainer: {
    backgroundColor: Colors.mainBlackColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  totalEconomyViewContainer: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
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
  },
  floatingTouchableButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1

  },
  floatingAddButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.highlightYellow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatingButtonText: {
    fontSize: 30,
    color: Colors.subGrayColor
  }
})