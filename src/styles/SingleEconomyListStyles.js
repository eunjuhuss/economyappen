import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F4F7F9',
    flex: 1
  },
  receiptImageContainer: {
    height: Dimensions.hp(50)
  },
  imageIconContainer: {
    width: Dimensions.wp(100),
    height: Dimensions.hp(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.mainGreenColor
  },
  textContainer: {
    flexDirection: 'row',
    padding: 20
  },
  leftContainer: {
    width: Dimensions.wp(30),
    alignItems: 'center',
  },
  rightContainer: {
    width: Dimensions.wp(70)
  },
  dateText: {
    fontFamily: Fonts.headText,
    color: Colors.subGrayColor,
    fontSize: 16
  },
  verticalLine: {
    borderLeftWidth: 1,
    height: '90%',
    borderColor: Colors.mainGreenColor,
  },
  labelValueContainer: {
    width: Dimensions.wp(70)
  },
  labelText: {
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor,
    fontSize: 14,
  },
  valueText: {
    fontFamily: Fonts.headText,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  }
})