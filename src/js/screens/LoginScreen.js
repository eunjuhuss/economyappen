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
import { login, getUser } from '../redux/store/actions/userActions';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
    constructor(props) {

    super(props);
    this.state = {
        email: '',
        password: '',
        error: ''
        };
    }

    componentWillMount() {
        this.props.getUser();
        console.log('this.props.getUser()',this.props.getUser())
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        // if (nextProps.user.email !== undefined) {
        // this.props.history.push('/');
        // }
    }

    handleLogin = () => {
        this.props.login(this.state.email, this.state.password).catch(err => {
        this.setState({
            error: err
        });
    });


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
                        email:
                    </Text>
                    <TextInput
                        value={this.state.email}
                        style={styles.input}
                        placeholder='email'
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
                    { this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null }
                    <CustomButton
                        color={'black'}
                        title='Login'
                        onPress={()=>this.handleLogin()}
                    />
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerInfoText}>
                            Don't have an account yet?
                        </Text>
                        <TouchableOpacity onPress={()=>this.onPressSignup()}>
                            <Text style={styles.signUpText}> SignUp</Text>
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

function mapStateToProps(state) {
    return { user: state.user };
}


export default connect(mapStateToProps, {login, getUser})(LoginScreen);