import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

//get screen info
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

/*import external component*/
import Register from './Register';
import Login from './Login';
export default class Mine extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textAlert}>
                    Seem like you haven‘t Login.
                </Text>
                <TouchableOpacity onPress={() => { this.pushToLogin() }}>
                    {/*login button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>GotoLoginPage</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.pushToRegister() }}>
                    {/*register button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Register</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }

    //Goto Register
    pushToRegister() {
        this.props.navigator.push(
            {
                component: Register,//Navigate page
                title: 'Register with email'
            }
        );
    }
    pushToLogin() {
        this.props.navigator.push(
            {
                component: Login,//Navigate page
                title: 'Login with email'
            }
        );
    }
};

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 140,
    },

   textAlert: {
       alignSelf:'center',
       color:'black',
       fontSize:20,
   },
    //login button style
    textLoginViewStyle: {
        width: 200,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //"Login" style
    textLoginStyle: {
        fontSize: 18,
        color: 'white',
    },
});
