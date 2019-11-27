import { StyleSheet } from 'react-native';
import Colors from '../js/constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  labelText: {
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: Colors.tintColor
},
loginButton: {
  marginTop: 30,
  backgroundColor: Colors.errorBackground,
  borderRadius: 40,
  height: 80,
  justifyContent: 'center',
  alignItems: 'center'
}
})