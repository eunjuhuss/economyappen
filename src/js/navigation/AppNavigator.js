import React from 'react';
import { 
  createAppContainer, 
  createSwitchNavigator, 
  createStackNavigator 
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigator = createStackNavigator (
  {
    Login: { screen : LoginScreen },
    Register: { screen : RegisterScreen }
  },
  {
    hedaerMode: 'none'
  }
)

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName : 'Auth'
  })
);
