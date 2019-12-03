import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';
                    
export const styles = StyleSheet.create({
  singleInputContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  textAndinputContainer: {
    padding: 10,
    flexGrow: 1,
    width: Dimensions.wp(70),

    borderWidth: 2,
    borderColor: 'red'
  },
  labelText: {
    color: Colors.subGrayColor,
    fontFamily: Fonts.headText
  },
  input: {
    height: 50,
    paddingLeft: 10,
    fontFamily: Fonts.subText,
    flexGrow: 1,
    // width: Dimensions.wp(40),
  }
});