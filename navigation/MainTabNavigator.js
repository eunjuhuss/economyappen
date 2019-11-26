import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoryScreen from '../screens/CategoryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
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
    Add: AddScreen,
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

const CategoryStack = createStackNavigator(
  {
    Category: CategoryScreen,
  },
  config
);

CategoryStack.navigationOptions = {
  tabBarLabel: 'Category',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' 
        ? 'ios-stats' 
        : 'md-stats'
      } 
    />
  ),
};

CategoryStack.path = '';

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
  CategoryStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
