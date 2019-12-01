import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    // paddingTop: Dimensions.hp(30),
    backgroundColor: Colors.mainGreenColor,
    height: Dimensions.hp(100),
    
    // justifyContent: 'center',
    // alignItems: 'center',
    
    borderColor: 'red',
    borderWidth: 1
    },
  contentContainer: {
    marginTop: 30,
    backgroundColor: Colors.mainBlackColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    borderColor: 'red',
    borderWidth: 1
  },
  totalEconomyViewContainer: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',


    borderColor: 'red',
    borderWidth: 1
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