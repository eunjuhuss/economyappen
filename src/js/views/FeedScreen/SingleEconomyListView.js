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
      price: this.props.navigation.state.params.price      
    }  
  }

  componentDidMount(){
    console.warn('price', this.state.price)    
  }

  render(){
    const {expence}= this.state;
    return(
      <View>
        <Text>
          {expence}
        </Text>   
      </View>
    )
  } 
}

SingleEconomyListView.navigationOptions = {
  header: null
};

export default SingleEconomyListView;