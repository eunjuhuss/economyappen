import React from 'react';
import DatePicker from 'react-native-datepicker';
import LabelIcon from '../components/LabelIcon';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const Calendar = ({date, onDateChange}) => {

    return (      
      <DatePicker
        // iconComponent={
          // <LabelIcon type={'calendar'} />
        // }
        style={{width: '100%'}}
        date={date!== ''? new Date() : null} //initial date from state
        mode="date" //The enum of date, datetime and time
        placeholder="Select Date"
        format="DD-MM-YYYY"
        minDate="01-01-2019"
        maxDate="01-01-2021"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"       
            
        customStyles={{
          // dateIcon: {
          //   position: 'absolute',
          //   left: 0,
          //   top: 4,
          //   marginLeft: 0,
          // },
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
    )
}

export default Calendar;

