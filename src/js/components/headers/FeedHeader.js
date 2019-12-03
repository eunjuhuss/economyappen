import React from 'react';
import {
  View,
  Platform
} from 'react-native';
import { styles } from '../../../styles/headers/BasicHeaderStyles';
import BasicHeader from './BasicHeader';
import HeaderLayout from './HeaderLayout';
import { Ionicons } from '@expo/vector-icons';

export default class FeedHeader extends React.Component{
  constructor(props) {  
    super(props); 

  }


  render(){   
    return (
      <HeaderLayout>
        <BasicHeader
          leftComponent={
            <Ionicons 
              size={26} 
              style={styles.headerIcon} 
              name={Platform.OS === 'ios' ? 
                'ios-arrow-back' : 
                'md-arrow-back'}
            />
          }
          // middleComponent={
            
          // }
          rightComponent={
              <Ionicons 
              size={26} 
              style={styles.headerIcon} 
              name={Platform.OS === 'ios' ? 
                'ios-search' : 
                'md-search'}
            />
          }
        />
      </HeaderLayout>
    );
  }
}