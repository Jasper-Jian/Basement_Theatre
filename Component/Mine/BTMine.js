import React, { Component } from 'react';
import {
    AppRegistry,
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
var Register = require('./Register');
var Login = require('./Login');
var Mine = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textAlert}>
                    Seem like you haven't Login.
                </Text>
                <TouchableOpacity onPress={() => { this.pushToLogin() }}>
                    {/*login button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>GotoLoginPage</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.pushToDetail() }}>
                    {/*register button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Register</Text>
                    </View>
                </TouchableOpacity>
                 <GoogleSigninButton style={{alignSelf: 'center',width: 200, height: 44}} color={GoogleSigninButton.Color.Light} size= {GoogleSigninButton.Size.Icon} onPress={() => {GoogleSignin.signIn()}}/>
            </View>
        );
    },

    //Goto Register
    pushToDetail() {
        this.props.navigator.push(
            {
                component: Register,//Navigate page
                title: 'Register with email'
            }
        );
    },
    pushToLogin() {
        this.props.navigator.push(
            {
                component: Login,//Navigate page
                title: 'Login with email'
            }
        );
    }
});

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor: 'skyblue',
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
module.exports = Mine;