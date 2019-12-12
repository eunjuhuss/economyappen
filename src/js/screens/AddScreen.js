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

            <AddinputList 
              icon={'folder'}
              label={'category'}
              value={this.state.category}
              onChangeText={
                category => this.setState({ category })
              }
            />

              <AddinputList 
                icon={'options'}
                label={'paymentMethod'}
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


