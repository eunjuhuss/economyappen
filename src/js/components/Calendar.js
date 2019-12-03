import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Ionicons } from '@expo/vector-icons';
import LabelIcon from '../components/LabelIcon';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

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
        iconComponent={
          <LabelIcon type={'calendar'} />
        }
        style={{width: '100%'}}
        date={date} //initial date from state
        mode="date" //The enum of date, datetime and time
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2019"
        maxDate="01-01-2021"
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
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 10            
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
}
