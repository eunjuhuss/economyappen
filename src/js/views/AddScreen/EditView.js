import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput 
} from 'react-native';

import { editEconomyList } from '../../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import AddinputList from '../../components/AddInputList';
import { styles } from '../../../styles/AddScreenStyles';
import CustomButton from '../../components/CustomButton';
import AddHeader from '../../components/headers/AddHeader';
import Calendar from '../../components/Calendar';

class EditView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      key: this.props.navigation.state.params.key,
      date: this.props.navigation.state.params.date,
      category: this.props.navigation.state.params.category,
      paymentMethod: this.props.navigation.state.params.paymentMethod,
      description: this.props.navigation.state.params.description,
      expences: this.props.navigation.state.params.expences
    }  
  }

  onEdit = () => { 
    this.props.editEconomyList(
      this.state.key, 
      this.state.date, 
      this.state.category, 
      this.state.paymentMethod, 
      this.state.description,
      this.state.expences
    )

    this.setState({
      key: '',
      date: '',
      category: '',
      paymentMethod: '',
      description: '',
      expences: ''
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
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleHeaderContainer}>
          <Text style={styles.expencesLabel}>EXPENCES</Text>
          <Text style={styles.incomeLabel}>INCOME</Text> 
        </View>
        <View style={styles.addInputListContainer}>
          <Calendar
            date={this.state.date}
            onDateChange={this.handleDate}
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
          <CustomButton
            color={'red'} 
            title={'Edit'}
            onPress={()=>this.onEdit()}
          />
        </View>       
      </ScrollView>
      </View>
    );
  }
}

EditView.navigationOptions = {
  header: <AddHeader />
};

export default connect(null, {editEconomyList})(EditView)


