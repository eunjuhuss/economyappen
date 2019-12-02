import { 
  StyleSheet,
  Platform
} from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.mainWhiteColor,
    width: Dimensions.wp(10),
    padding: 10,
    margin: 10,
    width: 45,
    borderRadius: 15,
    borderColor: Colors.mainWhiteColor,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: { 
          width: 0, 
          height: 2 
        },
        shadowOpacity: 0.16,
      },
      android: {
        elevation: 4,
      },
    })
  },
  icon: {
    fontSize: 30,
    color: Colors.highlightRed
  }
})