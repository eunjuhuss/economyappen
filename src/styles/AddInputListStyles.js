import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  singleInputContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    height: 40,
    lineHeight: 23,
    textAlignVertical: 'top',
    fontFamily: Fonts.subText,
    flexGrow: 1
  },
    labelText: {
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor,
    paddingBottom: 5,
    fontSize: 12
  }
});