import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function AddScreen() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

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
