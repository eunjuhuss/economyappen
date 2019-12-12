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
      uid: this.props.navigation.state.params.uid,
      date: this.props.navigation.state.params.date,
      category: this.props.navigation.state.params.category,
      paymentMethod: this.props.navigation.state.params.paymentMethod,
      description: this.props.navigation.state.params.description,
      expences: this.props.navigation.state.params.expences
    }  
  }

  onEdit = () => {
    const { 
      date, 
      category, 
      paymentMethod, 
      description, 
      expences 
      } = this.state;
    this.props.editEconomyList(
      date, 
      category, 
      paymentMethod, 
      description,
      expences,
      uid, 
    )

    this.setState({      
      date: '',
      category: '',
      paymentMethod: '',
      description: '',
      expences: '',
      uid: '',
    })
    this.props.navigation.navigate('Feed');
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
            onDateChange={date => this.setState({ date })}
          />
          <AddinputList 
            icon={'folder'}
            label={'category'}
            value={this.state.category}
            onChangeText={category => this.setState({ category })}
          />
          <AddinputList 
            icon={'options'}
            label={'paymentMethod'}
            value={this.state.paymentMethod}
            onChangeText={paymentMethod => this.setState({ paymentMethod })}
          />
          <AddinputList 
            icon={'book'}
            label={'description'}
            value={this.state.description}
            onChangeText={description => this.setState({ description })}
          />
          <AddinputList 
            icon={'switch'}
            label={'income/expences'}
            value={this.state.expences}
            onChangeText={expences => this.setState({ expences })}
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


