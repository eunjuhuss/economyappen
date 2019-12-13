import React from 'react';
import {    
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/LoginScreenStyles';
import { login, getUser } from '../redux/store/actions/userActions';
import { connect } from 'react-redux';
import CustomButton from '../components/CustomButton';
import Firebase from '../constants/Firebase';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            isLoading: false
        };
    }

    onSignUp = async () =>{
        if(this.state.email && this.state.password) {
            this.setState({ isLoading: true });
            try {
                const response = await Firebase
                .auth().createUserWithEmailAndPassword(
                    this.state.email, 
                    this.state.password
                );
                if(response) {
                    this.setState({ isLoading: false});
                    const user =  await Firebase.database()
                    .ref('/users').child(response.user.uid)
                    .set({
                        email:response.user.email, 
                        uid:response.user.uid
                    })
                    this.props.navigation.navigate('Loading');
                }
            }catch(error) {
                this.setState({ 
                    isLoading: false 
                });
                if(error.code === 'auth/email-already-in-use'){
                    this.setState({ 
                        error: 'User already Exists. try Loggin' 
                    });
                }
            }
        }
    }


    handleLogin = async () => {
        if(this.state.email && this.state.password){
            this.setState({isLoading: true});
            try{
                const response = await Firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email,this.state.password);
                if(response){
                    this.setState({ 
                        isLoading: false
                        })
                    this.props.navigation.navigate('Loading');
                }
            } catch(error) {
                this.setState({ isLoading: false});
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        alert(`Email address ${this.state.email} already in use.`)
                        break;
                    case 'auth/invalid-email':
                        alert(`Email address ${this.state.email} is invalid.`)
                        break;
                    case 'auth/operation-not-allowed':
                        alert(`Error during sign up.`)
                        break;
                    case 'auth/weak-password':
                        alert('Password is not strong enough. Add additional characters including special characters and numbers.')
                        break;
                    default:
                        alert(error.message)
                        break;
                        }
                    }
                }

        // this.props.navigation.navigate('Feed');
        //TODO  

        // Firebase.auth().signInWithEmailAndPassword(
        //     this.state.email, this.state.password
        // )
        // .then(() => {
        //     this.props.navigation.navigate('Feed')    
        // })
        // .catch(error=> {
        //     this.setState({
        //     ...state,
        //     error: error
        //     })
        // })
    }

    // onPressSignup = () => {
    //     this.props.navigation.navigate('Register');
    // }
    render() {
        const { error } = this.props; 
        const { email, password } = this.state;

        const isEnabled = 
            email.length > 0 &&  
            password.length > 0;

        return (    
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.labelText}>
                        Email:
                    </Text>
                    <TextInput
                        value={this.state.email}
                        style={styles.input}
                        placeholder='abc@exemple.com'
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                    />
                    <Text style={styles.labelText}>
                        Password:
                    </Text>
                    <TextInput
                        value={this.state.password}
                        style={styles.input}
                        placeholder='Password'
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true}
                    />
                    { error ? <Text style={styles.errorText}>{error}</Text> : null }
                    <CustomButton
                        buttonStatus={!isEnabled} 
                        color={'black'}
                        title='Login'
                        onPress={()=>this.handleLogin()}
                    />
                    <CustomButton
                        buttonStatus={!isEnabled} 
                        color={'blackLine'}
                        title='SignUp'
                        onPress={()=>this.onSignUp()}
                    />
{/* 
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerInfoText}>
                            Don't have an account yet?
                        </Text>
                        
                        <TouchableOpacity
                            disabled={!isEnabled}
                            onPress={()=>this.onSignUp()}
                        >
                            <Text style={styles.signUpText}> SignUp</Text>
                        </TouchableOpacity>                    
                    </View> */}
                    
                </ScrollView>
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null,
};
export default LoginScreen;

// const mapStateToProps =(state)=>{
//     return { 
//         user: state.userReducer.user,
//         error: state.userReducer.error
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (user) => dispatch(login(user)),
//         getUser: () => dispatch(getUser())
//     } 
// }


// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);