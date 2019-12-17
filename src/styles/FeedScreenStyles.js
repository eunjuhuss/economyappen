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
  loading:{
    color: Colors.mainBlackColor
  },
 checkboxContainer: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  incomeLabel: {
    fontFamily: Fonts.headText,
    fontSize: 14
  },
  expencesLabel: {
    fontFamily: Fonts.headText,
    fontSize: 14
  },



  floatingTouchableButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1

  },
  floatingAddButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.highlightYellow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatingButtonText: {
    fontSize: 30,
    color: Colors.subGrayColor
  }
})