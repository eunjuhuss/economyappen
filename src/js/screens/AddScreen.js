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
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddinputList from '../components/AddInputList';
import { styles } from '../../styles/AddScreenStyles';
import CustomButton from '../components/CustomButton';
import AddHeader from '../components/headers/AddHeader';
import Calendar from '../components/Calendar';
import ModalDropdown from 'react-native-modal-dropdown';

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

            <ModalDropdown
              defaultValue = {'Select Category'}
              defaultIndex={0}
              ref={this.dropDownRef}
              options={['Home', 'Transport','Travel', 'Food & Dining', 'Helth & Fitness', 'Shopping']}
              dropdownStyle={{
                borderRadius: 6,
                backgroundColor: "#26344a",
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowOffset: {
                  width: 0,
                  height: 5
                },
                shadowRadius: 20,
                shadowOpacity: 1,
                padding: 8
              }}
              textStyle = {{textAlign: 'center'}}
              onSelect={
                (index, category) => this.setState({ index, category })
              }
            />

            <ModalDropdown
              defaultValue = {'Select Payment Method'}
              defaultIndex={0}
              ref={this.dropDownRef}
              options={['Swish', 'Cash','Credit', 'Internet Banking']}
              dropdownStyle={{
                borderRadius: 6,
                backgroundColor: "#26344a",
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowOffset: {
                  width: 0,
                  height: 5
                },
                shadowRadius: 20,
                shadowOpacity: 1,
                padding: 8
              }}
              onSelect={
                (index, paymentMethod) => this.setState({ index, paymentMethod })
              }
            />

            

            {/* <AddinputList 
              icon={'folder'}
              label={'category'}
              value={this.state.category}
              onChangeText={
                category => this.setState({ category })
              }
            /> */}

              {/* <AddinputList 
                icon={'options'}
                label={'paymentMethod'}
                value={this.state.paymentMethod}
                onChangeText={ 
                  paymentMethod => this.setState({
                    paymentMethod 
                  })
                }
              /> */}

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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createEconomyList: (economyList) => dispatch(createEconomyList(economyList))
//   }
// }




AddScreen.navigationOptions = {
  header: <AddHeader />
};

export default connect(null, {createEconomyList})(AddScreen)


