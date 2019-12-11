import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  singleListContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    padding: 15,

  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: Colors.highlightYellow,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'

  },
  icon: { 
    color: Colors.mainWhiteColor
  },
  labelText: {
    flexGrow:1,
    paddingLeft: 10,
    fontFamily: Fonts.subText,
    color: Colors.mainBlackColor
  },
  arrowForwardIcon: {
    color:Colors.mainGreenColor
  }
})