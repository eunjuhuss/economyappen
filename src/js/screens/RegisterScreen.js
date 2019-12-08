import React, { useState } from 'react';
import {    
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput 
} from 'react-native';
import { styles } from '../../styles/LoginScreenStyles';
import CustomButton from '../components/CustomButton';
import { createUser } from '../redux/store/actions/userActions';
import { connect } from 'react-redux';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      emptyError: ''
    } 
  }

  isValid() {
    const { email, password } = this.state;

    if (email === '' || password === '' ) {
      this.setState({
        emptyError: 'Please enter in all fields'
      });
      return false;
    }
    return true;
  }

  handleRegister = () => {
    if (!this.isValid()) {
      return null;
    }
    
    this.props.createUser(
      this.state
    )
  }

  render() {
    const { emptyError } = this.state;
    const { error } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
          <Text style={styles.labelText}>
            email:
          </Text>
          <TextInput
            style={styles.input}
            placeholder='email'
            value={this.state.email}
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
          />
          <Text style={styles.labelText}>
            Password:
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder='Password'
            secureTextEntry={true}
            onChange={()=>this.handlePassword}
        />
        { error || emptyError ? <Text style={styles.errorText}>{error}{emptyError}</Text> : null }
          <CustomButton
            color={'black'}
            title='submit'
            onPress={()=>this.handleRegister()}
          />
        </ScrollView>
      </View>
    )
  }
}
RegisterScreen.navigationOptions = {
    header: null,
};

const mapStateToProps = (state) =>{
  return {
      user: state.userReducer.user,
      error: state.userReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user)=> dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
