import React from 'react';
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';
import * as firebase from 'firebase';
import { styles } from '../../styles/LoginScreenStyles';
import CustomButton from '../components/CustomButton';
import {login, getUser} from '../redux/store/actions/userActions';
import { connect } from 'react-redux';
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

    this.props.getUser();
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
                    const user =  await Firebase.database().ref('/users').child(response.user.uid).set({email:response.user.email, uid:response.user.uid})
                    this.props.navigation.navigate('Loading');
                }

            }catch(error) {
                this.setState({ isLoading: false });
                if(error.code == 'auth/email-already-in-use'){
                    alert('User already Exists. try Loggin in')
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
                    this.setState({ isLoading: false})
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
                        color={'black'}
                        title='Login'
                        onPress={()=>this.handleLogin()}
                    />

                    <CustomButton
                        color={'Green'}
                        title='signUp'
                        onPress={()=>this.onSignUp()}
                    />

                    {/* <View style={styles.registerContainer}>
                        <Text style={styles.registerInfoText}>
                            Don't have an account yet?
                        </Text>
                        
                        <TouchableOpacity
                        onPress={()=>this.onPressSignup()}
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

const mapStateToProps =(state)=>{
    return { 
        user: state.userReducer.user,
        error: state.userReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        getUser: () => dispatch(getUser())
    } 
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);