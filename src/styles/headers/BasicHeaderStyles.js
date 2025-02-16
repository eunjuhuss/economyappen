import { StyleSheet } from 'react-native';
import Dimensions from '../../js/constants/Dimensions';
import Colors from '../../js/constants/Colors';
import Fonts from '../../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.wp(100),
    height: Dimensions.hp(13),
    flexDirection: 'row',
    alignItems: 'center', 
  },
  containerDefault: {
    backgroundColor: Colors.mainWhiteColor,
    paddingTop: 20
  },
  leftContainer: {
    width: Dimensions.wp(15),
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  middleContainer: {
    width: Dimensions.wp(60),
    height: '100%', 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerIcon: {
    color: Colors.mainBlackColor,
    padding: 10
  },
  headerTextContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontFamily: Fonts.headText,
    color: Colors.mainBlackColor,
    fontSize: 22
  },
  dotText: {
    fontFamily: Fonts.headText,
    color: Colors.mainGreenColor,
    fontSize: 24
  }
});