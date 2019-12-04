import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';
import {  
  Platform
} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {    
    padding: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dateAndverticalLineContainer: {
    height: '90%',
    alignItems: 'center'
  },
  economyListsContainer: {
    backgroundColor: Colors.mainWhiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: Dimensions.hp(100),
  },
  verticalLine: {
    borderLeftWidth: 0.5,
    height: '100%',
    borderColor: Colors.mainGreenColor,
  },
  dateText: {
    fontFamily: Fonts.subText,
    color: Colors.mainGreenColor,
    fontSize: 14
  },
  categoryText: {   
    fontFamily: Fonts.headText,
    color: Colors.mainBlackColor
  },
  categoryDateText: {
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor
  },
  incomeExpencesText: {
    width: Dimensions.wp(10),
    fontFamily: Fonts.subText,
    color: Colors.highlightRed
  },
  currencyText: {
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor,
    fontSize: 13
  }
})