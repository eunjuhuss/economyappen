import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';
import {  
  Platform
} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    padding:10,
    flex: 1,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: Colors.mainWhiteColor,

  },
  dateAndverticalLineContainer: {
    height: '100%',
    alignItems: 'center',
    width: Dimensions.wp(20),
  },
  economyListsContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: Dimensions.hp(100),
  },
  verticalLine: {
    borderLeftWidth: 1,
    height: '90%',
    borderColor: Colors.mainGreenColor,
  },
  receiptImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10, 
  },
  imageButton: {
    width: Dimensions.wp(10),
    borderRadius: 10, 

  },
  dateText: {
    fontFamily: Fonts.headText,
    color: Colors.subGrayColor,
    fontSize: 14
  },
  categoryText: {   
    fontFamily: Fonts.headText,
    color: Colors.mainBlackColor,
    fontSize: 16
  },
  categoryAndDateContainer: {
    width: Dimensions.wp(25),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },
  categoryDateText: {
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor
  },
  priceText: {
    width: Dimensions.wp(20),
    fontFamily: Fonts.headText,
    textAlign: 'right',
    fontSize: 16,
    paddingRight: 20
  },
  swipeout: {
    backgroundColor:'#F4F7F9',
  },
  icon: {
    padding: 20,
    color: Colors.mainWhiteColor
  }
})