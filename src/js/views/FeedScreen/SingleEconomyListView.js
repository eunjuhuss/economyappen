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
import Colors from '../../constants/Colors';

const statusStyles = (type)=> {   
  if(type === true){
    return { 
      color: Colors.highlightRed 
    }
  } 
  else if(type === false){
    return { 
      color: Colors.mainBlackColor 
    }
  }
}

function LabelAndValue({type, label, value}){
  return(
    <View style={styles.labelValueContainer}>     
      <Text style={styles.labelText}>
        {label.toUpperCase()}
      </Text>
      <Text style={[statusStyles(type),styles.valueText]}>
        {value.toUpperCase()}
      </Text>
    </View>
  )
}

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
            <LabelAndValue
              type={this.state.expence}
              label={'category'}
              value={this.state.category}            
            />
            <LabelAndValue
              type={this.state.expence}
              label={'payment method'}
              value={this.state.paymentMethod}            
            />
            <LabelAndValue
              type={this.state.expence}
              label={'description'}
              value={this.state.description}            
            />
            <LabelAndValue
              type={this.state.expence}
              label={'price'}
              value={this.state.price}            
            />
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