import React from 'react';
import PropTypes from 'prop-types'; 
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput,
  CheckBox,
} from 'react-native';
import { createEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import Firebase from '../constants/Firebase';
import Dimensions from '../constants/Dimensions';
import * as ImageHelpers from '../constants/ImageHelpers'
import AddinputList from '../components/AddInputList';
import { styles } from '../../styles/AddScreenStyles';
import CustomButton from '../components/CustomButton';
import AddHeader from '../components/headers/AddHeader';
import Calendar from '../components/Calendar';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import SelectDropdown from '../components/SelectDropdown';
import ImageBox from '../components/ImageBox';

class AddScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expence: true,
      income: false,
      date: new Date().getDate(),
      category: '',
      paymentMethod:'',
      description: '',
      price: '',
      checkReceipt: false  
    }  
    this.dropDownRef = React.createRef();
  }

  onsubmit = () => { 
    const { 
      expence,
      income, 
      date,
      category, 
      paymentMethod, 
      description, 
      price
    } = this.state;
    this.props.createEconomyList(
      expence,
      income, 
      date,
      category,
      paymentMethod,
      description,
      price
    )
    this.setState({
      expence: true,
      income: false, 
      date:'',
      category:'',
      paymentMethod:'',
      description: '',
      price: 0      
    })
  }

  render(){
    const {
      expence,
      income, 
      date, 
      category, 
      paymentMethod, 
      description, 
      price,
    } = this.state;

    const isEnabled = 
      date.length > 0 &&  
      category.length > 0 && 
      paymentMethod.length > 0 &&  
      description.length > 0 && 
      price.length > 0;
    
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
            defaultValue = {'Home   ▼'}
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
            defaultValue = {'Swish   ▼'}
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
        <View style={styles.receiptCheckBoxContainer}>
          <View style={styles.labelCheckBox}>
            <Text style={styles.labelText}> 
              Do you have a receipt?
            </Text>
            <CheckBox
              style={styles.receiptCheckBox}
              value={this.state.checkReceipt}
              onValueChange={
                () => this.setState({
                  checkReceipt: !this.state.checkReceipt
                })
              }
            /> 
          </View>             
          { this.state.checkReceipt ? (
            <View style={styles.imageBoxContainer}>
              <ImageBox /> 
            </View>
            ):(
              null
            )
          } 
          </View>
          <CustomButton
            buttonStatus={!isEnabled} 
            color={'red'} 
            title={'SUBMIT'}
            icon={'checkmark'}
            onPress={()=>this.onsubmit()}
          />
        </View>       
      </ScrollView>
    </View>
    );
  }
}

AddScreen.navigationOptions = {
  header: <AddHeader />
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createEconomyList: (economyList) => dispatch(createEconomyList(economyList))
//   }
// }

export default connect(null, {createEconomyList})(AddScreen)


