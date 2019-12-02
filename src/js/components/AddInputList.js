import React from 'react';
import {
  Text, 
  TextInput, 
  View 
} from 'react-native';
import { styles } from '../../styles/AddInputListStyles';
import LabelIcon from '../components/LabelIcon';

const BLUE = "#8CE1AD";
const LIGHT_GRAY = "#8E8E8B";

class AddInputList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFocused: false
    }
  }
  
  handleFocus = event => {
    this.setState({ isFocused: true });
    if(this.props.onFocus){
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if(this.props.onBlur){
      this.props.onBlur(event);
    }
  };

  render() {
    const {
      icon, label, value, onChangeText, onFocus, onBlur, ...otherProps
    } = this.props;
    const { isFocused } = this.state;
    return (    
      <View style={styles.inputContainer}>
        <LabelIcon type={icon}/> 
        <Text style={styles.labelText}>
          {label}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={label}
          onChangeText={onChangeText}
          value={value}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...otherProps}
        />
      </View> 
    )
  }
}
export default AddInputList;
