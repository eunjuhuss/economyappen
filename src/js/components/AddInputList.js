import React from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import { styles } from '../../styles/AddInputListStyles';

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
      keyboardType,
      label, 
      value, 
      placeHolder,
      onChangeText, 
      onFocus, 
      onBlur, 
      ...otherProps
    } = this.props;
    const { isFocused } = this.state;
    const MAIN_GREEN = "#8CE1AD";
    const LIGHT_GRAY = "#8E8E8B";
    return (    
      <View style={styles.singleInputContainer}>
        <Text style={styles.labelText}>
          {placeHolder}
        </Text>
        <TextInput
          keyboardType={keyboardType}
          returnKeyType="done"
          multiline={false}
          blurOnSubmit={true}
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
    )
  }
}
export default AddInputList;
