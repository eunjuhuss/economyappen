import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainGreenColor,
    flex: 1
  },
  contentContainer: {
    backgroundColor: Colors.mainBlackColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  titleHeaderContainer: {
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
  addInputListContainer: {
    backgroundColor:Colors.mainWhiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    padding: 20
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