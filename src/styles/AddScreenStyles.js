import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors';
import Dimensions from '../js/constants/Dimensions';
import Fonts from '../js/constants/Fonts';
import { red } from 'ansi-colors';

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
  contentContainer: {
    backgroundColor:'#F4F7F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // selectExpenceIncomeButtonContainer: {
  //   width: Dimensions.wp(80),
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // },
  swithSelector: {
    fontFamily: Fonts.headText,
  },
  checkboxContainer: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  addInputListContainer: {
    

    padding: 20,
    flex: 1
  },
  incomeLabel: {
    fontFamily: Fonts.headText,
    fontSize: 14
  },
  expencesLabel: {
    fontFamily: Fonts.headText,
    fontSize: 14
  },
  dropDown: {
    width: Dimensions.wp(90),
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    borderColor: Colors.subGrayColor,
    color: Colors.subGrayColor,
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 8
  },
  addImage: {
    flex: 1
  },
  imageInput: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: Colors.subGrayColor,
    borderRadius: 10
  },
  receiptCheckBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxText: {
    fontFamily: Fonts.headText,
    color: Colors.subGrayColor
  },
  imageBoxContainer: {
    justifyContent: 'center',
    alignContent: 'center'
  }
})