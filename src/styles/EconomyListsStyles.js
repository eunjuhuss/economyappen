import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.mainWhiteColor,
    borderRadius: 25,
    height: 50,
    width: Dimensions.wp(90),
    padding: 10,
    margin: 10
  },
})