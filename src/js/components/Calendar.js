import React, { Component } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:'2019-12-03'
    }
  }
  render() {
    const {
      date,
      onDateChange
    } = this.props;
    return (      
      <DatePicker
        style={{ width: 200 }}
        date={date} //initial date from state
        mode="date" //The enum of date, datetime and time
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2016"
        maxDate="01-01-2019"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={onDateChange}
      />      
    )
  }
}
