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
    this.state = {
      uid: this.props.navigation.state.params.uid,
      expence: this.props.navigation.state.params.expence,
      income: this.props.navigation.state.params.income,
      date: this.props.navigation.state.params.date,
      category: this.props.navigation.state.params.category,
      paymentMethod: this.props.navigation.state.params.paymentMethod,
      description: this.props.navigation.state.params.description,
      price: this.props.navigation.state.params.price,
      image: this.props.navigation.state.params.image      
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
            <Text>category</Text>
            <Text>{this.state.category}</Text>
            <Text>paymentMethod</Text>
            <Text>{this.state.paymentMethod}</Text>
            <Text>description</Text>
            <Text>{this.state.description}</Text>
            <Text>price</Text>   
            <Text>{this.state.price}</Text>            
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