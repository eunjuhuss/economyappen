import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput,
  CheckBox 
} from 'react-native';

import { editEconomyList } from '../../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import AddinputList from '../../components/AddInputList';
import { styles } from '../../../styles/AddScreenStyles';
import CustomButton from '../../components/CustomButton';
import AddHeader from '../../components/headers/AddHeader';
import Calendar from '../../components/Calendar';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import SelectDropdown from '../../components/SelectDropdown';
import ImageBox from '../../components/ImageBox';

class EditView extends React.Component {
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

  onEdit = () => {
    const { 
      expence,
      income,
      date,                           
      category,
      paymentMethod, 
      description,
      price,
      uid
      } = this.state;

    this.props.editEconomyList(
      expence,
      income,
      date,                           
      category,
      paymentMethod, 
      description,
      price,
      uid, 
    )

    this.setState({      
      expence: true,
      income: false, 
      date:'',
      category:'',
      paymentMethod:'',
      description: '',
      price: 0, 
      uid: '',
    })
    this.props.navigation.navigate('Feed');
  }

  render(){
    const {
      expence,
      income,
      date,                           
      category,
      paymentMethod, 
      description,
      price
    } = this.state;

    const checkedIncomeStyle = () => {
      if(income === true){
        return{ color: Colors.highlightBlue }
      }else if(income === false){
        return{ color: Colors.subGrayColor }
      }
    }

    const checkedExpenceStyle = () => {
      if(expence === true){
        return{ color: Colors.highlightBlue }
      }else if(expence === false){
        return{ color: Colors.subGrayColor }
      }
    }

    return (
      <View 
      elevation={5} 
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={this.state.expence}
            onValueChange={
            value => this.setState({
                expence: !expence,
                income: !this.state.income
              })
            }
          />
          <Text style={[
              checkedExpenceStyle(), 
              styles.expencesLabel
            ]}
          >
            EXPENCES
          </Text>
          <CheckBox 
            value={this.state.income}
            onValueChange={
            value => this.setState({
                income: !income,
                expence: !this.state.expence
              })
            }
          />
          <Text style={[
            checkedIncomeStyle(),
            styles.incomeLabel]}
          >
            INCOME
          </Text> 
        </View>
        <View style={styles.addInputListContainer}>       
          <Calendar
            placeHolder={'Select Date/'}            
            date={this.state.date}
            onDateChange={ 
              date => this.setState({ date })
            }
          />       
        <View style={styles.dropDownContainer}>          
          <SelectDropdown
            placeHolder={'Select Category/'}  
            defaultValue = {this.state.category}
            options={[
              'Home',
              'Salary',                  
              'Transport',
              'Travel', 
              'Food & Dining', 
              'Helth & Fitness', 
              'Shopping'
              ]}
            onSelect={
              (index, category) => this.setState({ index, category })
            }
          />
          <SelectDropdown 
            placeHolder={'Select Payment method/'}    
            defaultValue = {this.state.paymentMethod}
            options={[
              'Swish', 
              'Cash',
              'Credit', 
              'Internet Banking'
            ]}
            onSelect={
              (index, paymentMethod) => this.setState({ index, paymentMethod })
            }
          />          
        </View>         
        <AddinputList
          keyboardType={'default'}          
          placeHolder={'Write description/'}
          label={'description'}
          value={this.state.description}
          onChangeText={
            description => this.setState({
              description 
            })
          }
        />
        <AddinputList
          keyboardType={'numeric'}        
          placeHolder={'How much did you get or spend?/'}
          label={'income/expences'}
          value={this.state.price}
          onChangeText={ 
            price => this.setState({
              price 
            })
          }
        />
          <CustomButton
            buttonStatus={false} 
            color={'red'} 
            title={'EDIT'}
            icon={'checkmark'}
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


