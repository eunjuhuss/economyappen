import React from 'react';
import PropTypes from 'prop-types'; 
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput,
  CheckBox 
} from 'react-native';
import { createEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import Firebase from '../constants/Firebase';
import Dimensions from '../constants/Dimensions';
import * as ImageHelpers from '../constants/ImageHelpers'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddinputList from '../components/AddInputList';
import { styles } from '../../styles/AddScreenStyles';
import CustomButton from '../components/CustomButton';
import AddHeader from '../components/headers/AddHeader';
import Calendar from '../components/Calendar';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import SelectDropdown from '../components/SelectDropdown';
import ModalDropdown from 'react-native-modal-dropdown';

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
      category.length !== '' && 
      paymentMethod.length !== '' &&  
      description.length > 0 && 
      price.length > 0;

    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.titleHeaderContainer}>
          <CheckBox 
            value={this.state.expence}
            onValueChange={
            value => this.setState({
                expence: !expence,
                income: !this.state.income
              })
            }
          />
          <Text style={styles.expencesLabel}>EXPENCES</Text>
          <CheckBox 
            value={this.state.income}
            onValueChange={
            value => this.setState({
                income: !income,
                expence: !this.state.expence
              })
            }
          />
          <Text style={styles.incomeLabel}>INCOME</Text> 
        </View>
        <View style={styles.addInputListContainer}>
            <Calendar            
              date={this.state.date}
              onDateChange={ 
                date => this.setState({ date })
              }
            />

            <SelectDropdown 
              defaultValue = {'Select Category'}
              options={[
                'Home', 
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
              defaultValue = {'Select Payment Method'}
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


              <AddinputList 
                icon={'book'}
                label={'description'}
                value={this.state.description}
                onChangeText={
                  description => this.setState({
                    description 
                  })
                }
              />

              <AddinputList
                icon={'switch'}
                label={'income/expences'}
                value={this.state.price}
                onChangeText={ 
                  price => this.setState({
                    price 
                  })
                }
              />
              <View style={styles.receiptCheckBoxContainer}>
                <Text style={styles.checkboxText}> 
                  Do you have a receipt?
                </Text>
                <CheckBox 
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
  
          <CustomButton
            buttonStatus={!isEnabled} 
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

AddScreen.navigationOptions = {
  header: <AddHeader />
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createEconomyList: (economyList) => dispatch(createEconomyList(economyList))
//   }
// }

export default connect(null, {createEconomyList})(AddScreen)


