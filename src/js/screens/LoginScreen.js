import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';
import * as firebase from 'firebase';
import { styles } from '../../styles/LoginScreenStyles';
import CustomButton from '../components/CustomButton';
// import { connect } from 'react-redux';
// import { setUserName, watchUserData } from './../redux/app-redux';

// const mapStateToProps = (state) => {
//   return {
//     name: state.name,
//     userData: state.userData
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserName: (text) => { dispatch(setUserName(text)) },
//     watchUserData: () => { dispatch(watchUserData())},
//   };
// }

export default class LoginScreen extends React.Component {
    constructor(props) {

        super(props);
        // this.state = {
        //   name: this.props.name
        // }
        // this.props.watchUserData();
    }

    onPressLogin = () => {
            this.props.navigation.navigate('Feed');
        }
    onPressSignup = () => {
        this.props.navigation.navigate('Register');
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.labelText}>
                        Username:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                    />
                    <Text style={styles.labelText}>
                        Password:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                    />
                    <CustomButton
                        color={'black'}
                        title='Login'
                        onPress={()=>this.onPressLogin()}
                    />
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerInfoText}>
                            Don't have an account yet?
                        </Text>
                        <TouchableOpacity onPress={()=>this.onPressSignup()}>
                            <Text style={styles.signUpText}> SingUp</Text>
                        </TouchableOpacity>                    
                    </View>
                    
                </ScrollView>
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null,
};


// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);