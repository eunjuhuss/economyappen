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
      error: ''
    } 
  }

  isValid() {
    const { email, password} = this.state;

    if (email === '' || password === '' ) {
      this.setState({
        error: 'Please enter in all fields'
      });
      return false;
    }
    return true;
  }



  handleRegister = () => {
    const { email, password } = this.state
    if (!this.isValid()) {
      return ;
    }
    
    this.props.createUser(
      email, password
      ).then(()=>{
        this.props.history.replace('/')
      }).catch(error => {
        this.setState({
          error: error.message
      })
    })
    this.props.navigation.navigate('Login');
  }

  render() {

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
            onChange={()=>this.handlePassword}
        />
        { this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null }
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

// const mapStateToProps = state =>{
//   return state;
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     createUser: createUser
//   }, dispatch) 
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

export default connect(null, {createUser})(RegisterScreen)
