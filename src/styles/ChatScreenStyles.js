import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainWhiteColor,    
    width: Dimensions.wp(100)
  }
})