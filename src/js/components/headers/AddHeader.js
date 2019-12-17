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
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>
                Add
              </Text>
              <Text style={styles.dotText}>
                .
              </Text>
            </View>  
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