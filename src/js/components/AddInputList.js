import React from 'react';
import {
  Text, 
  TextInput, 
  View 
} from 'react-native';
import { styles } from '../../styles/AddInputListStyles';
import LabelIcon from '../components/LabelIcon';

const MAIN_GREEN = "#8CE1AD";
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
      label, value, onChangeText, onFocus, onBlur, ...otherProps
    } = this.props;
    const { isFocused } = this.state;
    return (    
      <View style={styles.singleInputContainer}>
        {/* <LabelIcon type={icon}/> */}
        {/* <View style={styles.textAndinputContainer}> */}
          {/* <Text style={styles.labelText}>
            {label}
          </Text> */}
          <TextInput
            style={styles.input}
            placeholder={label}
            onChangeText={onChangeText}
            value={value}
            multiline={true}
            underlineColorAndroid={
              isFocused ? MAIN_GREEN : LIGHT_GRAY
            }
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...otherProps}
          />
        </View>
      // </View> 
    )
  }
}
export default AddInputList;
