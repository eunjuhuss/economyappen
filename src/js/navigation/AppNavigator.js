import React from 'react';
import { 
  createAppContainer, 
  createSwitchNavigator, 
  createStackNavigator 
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';

const AuthNavigator = createStackNavigator (
  { 
    Welcome: { screen : WelcomeScreen },
    Login: { screen : LoginScreen },
    Register: { screen : RegisterScreen },
    Loading: { screen : LoadingScreen },
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
    initialRouteName : 'Main'
  })
);
