import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';
import {  
  Platform
} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labelText: {
    color: Colors.subGrayColor,
    fontFamily: Fonts.headText
  },
  input: {
    width: Dimensions.wp(50),
    height: 50,
    paddingLeft: 10,
    fontFamily: Fonts.subText
  }
});