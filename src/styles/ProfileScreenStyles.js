import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F4F7F9',
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 0
    },
    shadowOpacity: 0.6  
  },
  userNameContainer: {   
    paddingTop: Dimensions.hp(10), 
    width: Dimensions.wp(100), 
    height: Dimensions.hp(50),
    backgroundColor: Colors.mainGreenColor
  },
  userEmailText: {
    alignSelf: 'center',
    color: Colors.mainWhiteColor,
    fontFamily: Fonts.headText,
    fontSize: 17
  },
  incomeAndExpenceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',  
    marginTop: 'auto',
    padding: 10
  },
  totalAndLabelContainer: {
    alignItems: 'center'
  },
  totalText: {
    fontSize: 20,
    fontFamily: Fonts.headText,
    color: Colors.mainBlackColor,
    padding:5
  },
  labelText: {
    fontSize: 12,
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor,
    padding:5
  },
  imageBoxcontainer: {
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})