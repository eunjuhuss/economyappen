import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
      >
      </ScrollView>
    </View>
  );

}

ProfileScreen.navigationOptions = {
  title: 'Profile',
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
