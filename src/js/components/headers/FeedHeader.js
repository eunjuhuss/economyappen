import React from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';
import { styles } from '../../../styles/headers/BasicHeaderStyles';
import BasicHeader from './BasicHeader';
import HeaderLayout from './HeaderLayout';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default class FeedHeader extends React.Component{

  render(){ 
    return (
      <HeaderLayout>
        <BasicHeader
          leftComponent={
            <Ionicons 
              size={26} 
              style={styles.headerIcon} 
              name={Platform.OS === 'ios' ? 
                'ios-list' : 
                'md-list'}
            />
          }
          middleComponent={
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>
                Feed
              </Text>
              <Text style={styles.dotText}>
                .
              </Text>
            </View>  
          }
        />
      </HeaderLayout>
    );
  }
}