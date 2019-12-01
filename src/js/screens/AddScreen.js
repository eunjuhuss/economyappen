import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { createEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AddScreen extends React.Component {
  constructor(props){
    super(props)
      this.state={
        date: '',
        category: ''
      }
      

    }

  onsubmit = () => {   
    this.props.createEconomyList(this.state.date, this.state.category)
    this.setState({
      date:'',
      category:''
    })
  }

  handleDate = text => {
    this.setState({
      date: text
    })
  }

  handleCategory = text => {
    this.setState({
      category: text
    })
  }
  
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.labelText}>
          date:
        </Text>
        <TextInput
          style={styles.input}
          placeholder='date'
          onChangeText = {this.handleDate}
          value={this.state.date}
        />
        <Text style={styles.labelText}>
          category:
        </Text>
        <TextInput
          style={styles.input}
          placeholder='category'
          onChangeText = {this.handleCategory}
          value={this.state.category}
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
