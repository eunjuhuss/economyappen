import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput 
} from 'react-native';
import { createEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddinputList from '../components/AddInputList';
import { styles } from '../../styles/AddScreenStyles';
import CustomButton from '../components/CustomButton';
import AddHeader from '../components/headers/AddHeader';
import Calendar from '../components/Calendar';

class AddScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date().getDate(),
      category: '',
      paymentMethod:'',
      description: '',
      expences: ''
    }  
  }

  onsubmit = () => { 
    this.props.createEconomyList(
      this.state.date, 
      this.state.category, 
      this.state.paymentMethod,
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

  handleDescription = description => {
    this.setState({
      description: description
    })
  }

  
  handlepaymentMethod = paymentMethod => {
    this.setState({
      paymentMethod: paymentMethod
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
            onChangeText={this.handlepaymentMethod}
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
            title={'Submit'}
            onPress={()=>this.onsubmit()}
          />
        </View>       
      </ScrollView>
      </View>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createEconomyList: (economyList) => dispatch(createEconomyList(economyList))
//   }
// }
AddScreen.navigationOptions = {
  header: <AddHeader />
};

export default connect(null, {createEconomyList})(AddScreen)


