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


export default class AddHeader extends React.Component{
  constructor(props) {  
    super(props);
  }




  render(){ 
    // const value = this.props.value;

    
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
          middleComponent={
            <Text style={styles.headerText} >
              Have you spend a money?
            </Text>  
          }
          // rightComponent={
          //     <Ionicons 
          //     size={26} 
          //     style={styles.headerIcon} 
          //     name={Platform.OS === 'ios' ? 
          //       'ios-search' : 
          //       'md-search'}
          //   />
          // }
        />
      </HeaderLayout>
    );
  }
}