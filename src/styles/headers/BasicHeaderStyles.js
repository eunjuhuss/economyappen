import { StyleSheet } from 'react-native';
import Dimensions from '../../js/constants/Dimensions';
import Colors from '../../js/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.wp(100),
    height: Dimensions.hp(13),
    flexDirection: 'row',
    alignItems: 'center', 
  },
  containerDefault: {
    backgroundColor: Colors.mainGreenColor,
    paddingTop: 20
  },
  leftContainer: {
    width: Dimensions.wp(20),
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  middleContainer: {
    width: Dimensions.wp(60),
    height: '100%', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContainer: {
    width: Dimensions.wp(20),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    color: Colors.mainBlackColor
  }
});