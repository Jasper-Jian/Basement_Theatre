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
import {LoginManager} from 'react-native-fbsdk';

import Mine from './BTMine';

var CheckLogin = 0;

//get Screen width
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var Register = require('./Register');
var Login = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*use View to make username txt box*/}
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        //placeholder
                        placeholder='username'
                        textAlign='center'
                        underlineColorAndroid={'transparent'} />
                </View>
                {/*password input box*/}
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='password'
                        textAlign='center'
                        //invisibility of password
                        secureTextEntry={true} />
                </View>

                {/*clickable button*/}
                <TouchableOpacity onPress={() => { alert('Login') }}>
                    {/*login button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.pushToDetail() }}>
                    {/*register button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Register</Text>
                    </View>
                </TouchableOpacity>
                {/*Facebook Login button*/}
                <TouchableOpacity onPress={() => { this._fbAuth()}}>
                    {/*register button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Login with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },
    _fbAuth() {
        LoginManager.logInWithPublishPermissions(['public_profile']).then(function (result) {
            if (result.isCancelled) {
                console.log('Login cancelled');
            } else {
                console.log('Login success:' + result.grantedPermissions.toString);
            }
        },
            function (error) {
                console.log('An error occured:' + error);
            })
        },

    //Goto Register
    pushToDetail() {
        this.props.navigator.push(
            {
                component: Register,//Navigate page
                title: 'Register with email'
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

    textInputViewStyle: {
        width: width - 30,
        height: 45,
        borderRadius: 18,
        borderColor: 'blue',
        borderWidth: 3,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
    },
    //txt box style
    textInputStyle: {
        width: width - 30,
        height: 35,
        backgroundColor: '#00000000',
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 4 : 8,
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
module.exports = Login;