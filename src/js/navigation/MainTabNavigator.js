import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import EditView from '../views/AddScreen/EditView';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Edit: EditView
  },
  config
);

FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? 'ios-list'
        : 'md-list'
      }
    />
  ),
};

FeedStack.path = '';

const AddStack = createStackNavigator(
  {
    Add: AddScreen
  },
  config
);

AddStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' 
        ? 'ios-calendar' 
        : 'md-calendar'
      } 
    />
  ),
};

AddStack.path = '';

const ChatStack = createStackNavigator(
  {
    Chat: ChatScreen,
  },
  config
);

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' 
        ? 'ios-chatbubbles' 
        : 'md-chatbubbles'
      } 
    />
  ),
};

ChatStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios'
        ? 'ios-person' 
        : 'md-person' 
      } 
    />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  FeedStack,
  AddStack,
  ChatStack,
  ProfileStack,
}, 
{
  tabBarOptions: {
    style: {
      backgroundColor: Colors.mainWhiteColor,
      borderTopColor: Colors.mainWhiteColor,
    },
    labelStyle: {
      fontFamily: Fonts.headText
    },
    inactiveTintColor: Colors.subGrayColor,
    activeTintColor: Colors.mainGreenColor
  }
});

tabNavigator.path = '';
export default tabNavigator;
