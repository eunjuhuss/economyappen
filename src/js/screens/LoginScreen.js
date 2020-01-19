import React from 'react';
import {    
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { styles } from '../../styles/LoginScreenStyles';
import CustomButton from '../components/CustomButton';
import Firebase from '../constants/Firebase';
import AddinputList from '../components/AddInputList';

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
                        error: 'User already Exists. Try loggin' 
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


    }

    render() {
        const { error } = this.state; 
        const { email, password } = this.state;

        const isEnabled = 
            email.length > 0 &&  
            password.length > 0;

        return (    
            <View style={styles.container}>
                <View style={styles.topTriangle} />  
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                    >
                    <View style={styles.inputContainer}>
                        <View style={styles.welcomeTextContainer}>
                            <Text style={styles.helloText}>Hello</Text>
                            <Text style={styles.dotText}>.</Text>  
                        </View>  
                                        
                        <AddinputList
                            keyboardType={'email-address'}          
                            placeHolder={'Email'}
                            label={'abc@exemple.com'}
                            value={this.state.email}
                            onChangeText={
                                email => this.setState({ 
                                    email 
                                })
                            }
                        />
                        <AddinputList
                            keyboardType={'default'}          
                            placeHolder={'Password'}
                            label={'Password'}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={
                                password => this.setState({ 
                                    password 
                                })
                            }
                        />
                        { error ?  (   
                            <Text style={styles.errorText}>
                                {error}
                            </Text>
                            ):(
                                null
                            )  
                        }

                        <CustomButton
                            icon={'checkmark'}
                            buttonStatus={!isEnabled} 
                            color={'black'}
                            title='Login'
                            onPress={()=>this.handleLogin()}
                        />
                        <CustomButton
                            icon={'checkmark'}
                            buttonStatus={!isEnabled} 
                            color={'blackLine'}
                            title='SignUp'
                            onPress={()=>this.onSignUp()}
                        />
                    </View>
                    

                </ScrollView>
                <View style={styles.bottomTriangle}/>   
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null,
};
export default LoginScreen;
