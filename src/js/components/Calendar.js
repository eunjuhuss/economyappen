import React from 'react';
import { 
  Text,
  View,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import LabelIcon from '../components/LabelIcon';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import { styles } from '../../styles/AddScreenStyles';

const Calendar = ({placeHolder,date, onDateChange}) => {
  return ( 
    <View style={styles.labelInputBox}>
      <Text style={styles.labelText}>
        {placeHolder}
      </Text>     
      <DatePicker
        style={{width: '100%'}}
        date={date!== ''? new Date() : null} 
        mode="date"
        placeholder="Select Date"
        format="DD-MM-YYYY"
        minDate="01-01-2019"
        maxDate="01-01-2021"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"       
            
        customStyles={{
          dateInput: {
            borderWidth: 1,
            alignItems: 'center',        
          },
          dateText: {
            color: Colors.subGrayColor,
            fontFamily: Fonts.subText,
            fontSize: 16
          }
        }}
        onDateChange={onDateChange}
      /> 
    </View>     
  )
}
export default Calendar;
