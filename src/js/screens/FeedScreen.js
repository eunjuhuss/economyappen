import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import EconomyList from './../components/EconomyList';
import { getEconomyList } from '../redux/store/actions/economyActions';
import { connect } from 'react-redux';
import _ from 'lodash';
// import { fireStoreConnect } from 'react-redux-firebase';
// import { compose } from 'red'

class FeedScreen extends React.Component {
  componentDidMount(){
  this.props.getEconomyList();
  }
  render() {
    console.log('props.economyList', this.props.economyList);

  const { economyList } = this.props.economyList;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <FlatList data={this.props.economyList}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=> {
                      return (
                        <View style={styles.itemContainer}>
                          <Text>
                            {item.date}
                            {item.category}
                          </Text>
                        </View>
                      )
                    }} /> 
            
        
        </ScrollView>
      </View>
    );
  }
}

FeedScreen.navigationOptions = {
  title: 'Feed',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});

const mapStateToProps = (state) => {

  const economyList = _.map(state.economyList.economyList, (value, key)=> {
     return {
    ...value,
    key:key
  }
  })
  return {
    economyList
  }
 
}

export default connect(mapStateToProps, {getEconomyList})(FeedScreen);
