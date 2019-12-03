import { 
  StyleSheet,
  Platform
} from 'react-native';
import Colors from '../js/constants/Colors';

export const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.mainWhiteColor,
    // padding: 10,
    width: 45,
    height: 45,
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
    color: Colors.mainGreenColor,
    padding:10,
    borderWidth: 2,
    borderColor: 'red'
  }
})