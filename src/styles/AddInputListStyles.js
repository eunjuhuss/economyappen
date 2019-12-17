import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';
                    
export const styles = StyleSheet.create({
  singleInputContainer: {
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

  input: {
    height: 40,
    lineHeight: 23,
     textAlignVertical: 'top',

    fontFamily: Fonts.subText,
    flexGrow: 1,
    // width: Dimensions.wp(40),
  }
});