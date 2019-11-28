import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApiKeys from './src/js/constants/ApiKeys';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
// import { store } from './src/js/redux/app-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './src/js/redux/store/reducers/rootReducer';
import thunk from 'redux-thunk';

import AppNavigator from './src/js/navigation/AppNavigator';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingComplete: false,
            isAuthenticationReady: false,
            isAuthenticated: false
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    onAuthStateChanged = (user) => {
        this.setState({ isAuthenticationReady: true });
        this.setState({ isAuthenticated: !!user });
    }


    render() {
        const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
        if ((!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={() => this.handleFinishLoading()}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                        <AppNavigator />
                    </View>
                </Provider>
            );
        }
    }

    loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./src/assets/images/robot-dev.png'),
                require('./src/assets/images/robot-prod.png')
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free to
                // remove this if you are not using it in your app
                'Raleway-Bold': require('./src/assets/fonts/Raleway-Bold.ttf'),
                'Raleway-Medium': require('./src/assets/fonts/Raleway-Medium.ttf')
            }),
        ]);
    };

    handleLoadingError = error => {
        // In this case, you might want to report the error to your error reporting
        // service, for example Sentry
        console.warn(error);
    };

    handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});