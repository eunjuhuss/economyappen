import React from 'react';
import PropTypes from 'prop-types'; 
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  TextInput 
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
      date: new Date().getDate(),
      category: '',
      paymentMethod:'',
      description: '',
      expences: ''  
    }  
    this.dropDownRef = React.createRef();
  }

  onsubmit = () => { 
    const { 
      date, 
      category, 
      paymentMethod, 
      description, 
      expences
    } = this.state;
    this.props.createEconomyList(
      date,
      category,
      paymentMethod,
      description,
      expences
    )
    this.setState({
      date:'',
      category:'',
      paymentMethod:'',
      description: '',
      expences: 0      
    })
  }

render(){
    const { 
      date, 
      category, 
      paymentMethod, 
      description, 
      expences
    } = this.state;

    const isEnabled = 
      date.length > 0 &&  
      category.length > 0 && 
      paymentMethod.length > 0 && 
      description.length > 0 && 
      expences.length > 0;
      

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
              onDateChange={ 
                date => this.setState({ date })
              }
            />

            {/* <ModalDropdown
      style={styles.dropDown}
      defaultValue = {'Select Category'}
      defaultIndex={-1}
      ref={this.dropDownRef}
      options={[
                'Home', 
                'Transport',
                'Travel', 
                'Food & Dining', 
                'Helth & Fitness', 
                'Shopping'
                ]}
      dropdownTextStyle={{
        fontSize: 16, 
        textAlign: 'center',
        color: Colors.subGrayColor,
        fontFamily: Fonts.subText
      }}
      dropdownStyle={{      
        width: Dimensions.wp(90),
        borderRadius: 6,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowRadius: 20,
        shadowOpacity: 1,
      
      }}
      textStyle = {{
        textAlign: 'left',
        color: Colors.subGrayColor,
        fontFamily: Fonts.subText, 
        fontSize: 14
      }}
        onSelect={
                category => this.setState({ category })
              }
    />


    <ModalDropdown
      style={styles.dropDown}
      defaultValue = {'Select Payment Method'}
      defaultIndex={-1}
      ref={this.dropDownRef}
      options={[
                'Swish', 
                'Cash',
                'Credit', 
                'Internet Banking'
              ]}
      dropdownTextStyle={{
        fontSize: 16, 
        textAlign: 'center',
        color: Colors.subGrayColor,
        fontFamily: Fonts.subText
      }}
      dropdownStyle={{      
        width: Dimensions.wp(90),
        borderRadius: 6,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowRadius: 20,
        shadowOpacity: 1,
      
      }}
      textStyle = {{
        textAlign: 'left',
        color: Colors.subGrayColor,
        fontFamily: Fonts.subText, 
        fontSize: 14
      }}
    onSelect={paymentMethod => this.setState({ paymentMethod }) }
/> */}

{/* 
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
            /> */}

            {/* <SelectDropdown 
              defaultValue = {'Select Payment Method'}
              options={[
                'Swish', 
                'Cash',
                'Credit', 
                'Internet Banking'
              ]}
              onSelect={
                (index, category) => this.setState({ index, category })
              }
            />   */}

 <AddinputList 
                icon={'book'}
                label={'description'}
                value={this.state.category}
                onChangeText={
                  category => this.setState({
                    category
                  })
                }
              />
              <AddinputList 
                icon={'book'}
                label={'description'}
                value={this.state.paymentMethod}
                onChangeText={
                  paymentMethod => this.setState({
                    paymentMethod 
                  })
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
                value={this.state.expences}
                onChangeText={ 
                  expences => this.setState({
                    expences 
                  })
                }
              />
              {/* <ImageBox /> */}
            
  
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

const mapDispatchToProps = (dispatch) => {
  return {
    createEconomyList: (economyList) => dispatch(createEconomyList(economyList))
  }
}

export default connect(null, mapDispatchToProps)(AddScreen)


