import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { createEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddinputList from '../components/AddInputList';

class AddScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: '',
      category: '',
      collected:'',
      description: ''
    }  
  }

  onsubmit = () => { 
    this.props.createEconomyList(
      this.state.date, 
      this.state.category, 
      this.state.collected,
      this.state.description,
      this.state.expences
    )
    this.setState({
      date:'',
      category:'',
      paymentMethod:'',
      description: '',
      expences: 0      
    })
  }

  handleDate = date => {
    this.setState({
      date: date
    })
  }

  handleCategory = category => {
    this.setState({
      category: category
    })
  }

  handleCollected = paymentMethod => {
    this.setState({
      paymentMethod: paymentMethod
    })
  }

  handleDescription = description => {
    this.setState({
      description: description
    })
  }

  handleExpences = expences => {
    this.setState({
      expences: expences
    })
  }
  
  render(){
    return (
      <ScrollView style={styles.container}>
        <AddinputList 
          icon={'calendar'}
          label={'date'}
          value={this.state.date}
          onChangeText={this.handleDate}
        />
        <AddinputList 
          icon={'folder'}
          label={'category'}
          value={this.state.category}
          onChangeText={this.handleCategory}
        />
        <AddinputList 
          icon={'options'}
          label={'paymentMethod'}
          value={this.state.paymentMethod}
          onChangeText={this.handlePaymentMethod}
        />
        <AddinputList 
          icon={'book'}
          label={'description'}
          value={this.state.description}
          onChangeText={this.handleDescription}
        />
        <AddinputList 
          icon={'switch'}
          label={'income/expences'}
          value={this.state.expences}
          onChangeText={this.handleExpences}
        />
        <TouchableOpacity onPress={()=>this.onsubmit()}>
          <Text>
            submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createEconomyList: (economyList) => dispatch(createEconomyList(economyList))
//   }
// }

export default connect(null, {createEconomyList})(AddScreen)

AddScreen.navigationOptions = {
  title: 'Add',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
