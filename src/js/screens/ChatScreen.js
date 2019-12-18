import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ChatScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

ChatScreen.navigationOptions = {
  title: 'Chat'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
});