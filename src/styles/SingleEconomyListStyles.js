import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F4F7F9',
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 0
    },
    shadowOpacity: 0.6  
  },
  receiptImageContainer: {
    height: Dimensions.hp(50)
  },
  imageIconContainer: {
    width: Dimensions.wp(100),
    height: Dimensions.hp(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flexDirection: 'row'
  },
  leftContainer: {
    width: Dimensions.wp(30)
  },
  rightContainer: {
    width: Dimensions.wp(70)
  }  
})