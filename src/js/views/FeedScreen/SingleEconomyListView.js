import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput,
  CheckBox 
} from 'react-native';

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
    console.log('image', this.state.image)
    return(
      <View style={{paddingTop: 50, alignItems: 'center',
    justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color:'black'}}>
          SingleEconomyListView
        </Text>
        <Text style={{fontSize: 20, color:'black'}}> 
          {this.state.date}
          {this.state.category}
          {this.state.paymentMethod}
          {this.state.description}
          {this.state.price}
          {this.state.image}
        </Text>   
      </View>
    )
  } 
}

SingleEconomyListView.navigationOptions = {
  header: null
};

export default SingleEconomyListView;