import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  itemContainer: {    
    height: 50,
    width: Dimensions.wp(100),
    padding: 10,
    marginBottom: 10
  },
  economyListsContainer: {
    backgroundColor: Colors.mainWhiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: Dimensions.hp(80),
  },
  dateText: {
    fontFamily: Fonts.headText,
    color: Colors.mainBlackColor,
    fontSize: 14

  } 
})