import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../../styles/headers/BasicHeaderStyles';
import BasicHeader from './BasicHeader';
import HeaderLayout from './HeaderLayout';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class AddHeader extends React.Component{
  constructor(props) {  
    super(props);
  }

  onPressGoBack=()=>{
    this.props.navigation.navigate('Feed');
  }

  render(){     
    return (
      <HeaderLayout>
        <BasicHeader
          leftComponent={
            <TouchableOpacity 
              onPress={()=>this.onPressGoBack()}
            >
              <Ionicons 
                size={26} 
                style={styles.headerIcon} 
                name={Platform.OS === 'ios' ? 
                  'ios-arrow-back' : 
                  'md-arrow-back'}
              />
            </TouchableOpacity>
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
        />
      </HeaderLayout>
    );
  }
}
export default withNavigation(AddHeader);