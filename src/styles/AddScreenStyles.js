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
  labelInputBox: {
    paddingTop: 10,
    paddingBottom: 10
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
    width: Dimensions.wp(43),
    height: 30,
    borderBottomColor: Colors.subGrayColor,
    color: Colors.subGrayColor,
    borderBottomWidth: 1,
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
    justifyContent: 'space-between',
    height: Dimensions.hp(15)
  },
  labelCheckBox: {
    flexDirection: 'row',
    alignItems: 'center'
 },

  checkboxText: {
    fontFamily: Fonts.headText,
    color: Colors.subGrayColor
  },
  imageBoxContainer: {
    justifyContent: 'flex-end',
  },
  labelText: {
    fontFamily: Fonts.subText,
    color: Colors.subGrayColor,
    paddingBottom: 5,
    fontSize: 12
  },
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDownAndIconContainer: {
    flexDirection: 'row',

  },
  arrowDownIcon: {
    margin: 10,
    alignSelf: 'flex-end',
    color: Colors.subGrayColor,
  }
})