import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EconomyList from './../components/EconomyList';
import { connect } from 'react-redux';
// import { fireStoreConnect } from 'react-redux-firebase';
// import { compose } from 'red'

class FeedScreen extends React.Component {
  render() {
    console.log(this.props.economyList);

  const { economyList } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <EconomyList economyList={economyList}/>
        
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
  return {
    economyList: state.economyList.economyList
  }
}

export default connect(mapStateToProps)(FeedScreen);
