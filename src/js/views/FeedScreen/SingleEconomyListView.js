import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Platform,
  Text,
  View,
  Image,
  TextInput,
  CheckBox 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../../styles/SingleEconomyListStyles';

class SingleEconomyListView extends React.Component { 
  constructor(props){
    super(props)
    const navigationParams = this.props.navigation.state.params;
    this.state = {
      uid: navigationParams.uid,
      expence: navigationParams.expence,
      income: navigationParams.income,
      date: navigationParams.date,
      category: navigationParams.category,
      paymentMethod: navigationParams.paymentMethod,
      description: navigationParams.description,
      price: navigationParams.price,
      image: navigationParams.image      
    }  
  }

  render(){
    return(
      <View 
          style={styles.container}>
        { this.state.image ? (
          <Image
            style={styles.receiptImageContainer}
            source={{uri: this.state.image}}
          /> 
        ):(
          <View style={styles.imageIconContainer}>
            <Ionicons
              size={60}
              style={styles.imageIcon}
              name={Platform.OS === 'ios' ?
                `ios-image` : 
                `md-image`}
            />
        </View>
        )}
        
        <View 
          style={styles.textContainer}
        >        
          <View style={styles.leftContainer}>
            <Text style={styles.dateText}>
              {this.state.date}
            </Text>
            <View style={styles.verticalLine} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.labelText}>category</Text>
            <Text style={styles.valueText}>{this.state.category}</Text>
            <Text style={styles.labelText}>paymentMethod</Text>
            <Text style={styles.valueText}>{this.state.paymentMethod}</Text>
            <Text style={styles.labelText}>description</Text>
            <Text style={styles.valueText}>{this.state.description}</Text>
            <Text style={styles.labelText}>price</Text>   
            <Text style={styles.valueText}>{this.state.price}</Text>            
          </View>
        </View>
      </View>
    )
  } 
}

SingleEconomyListView.navigationOptions = {
  header: null
};

export default SingleEconomyListView;