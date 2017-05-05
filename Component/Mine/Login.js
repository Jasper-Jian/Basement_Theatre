import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Platform,
    TouchableOpacity,
    Navigator
} from 'react-native';
import {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

var Register = require('./Register');
var Mine = require('./BTMine');
var CheckLogin = 0;
//get Screen width
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

var Login = React.createClass({
    render() {
        return (
            <View style={styles.container}>
              <Image source={{uri: 'https://basement-theatre.squarespace.com/assets/images/logo-expanded.png'}} style={styles.itemStyle}>
                {/*use View to make username txt box*/}
                <View style={styles.LoginBox}>
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

                {/*register button*/}
                <TouchableOpacity onPress={() => { this._ToRegister()}}>
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
                 <GoogleSigninButton style={styles.textLoginViewStyle} color={GoogleSigninButton.Color.Light} size= {GoogleSigninButton.Size.Icon} onPress={() => {GoogleSignin.signIn()}}/>
                 </View>
                 </Image>
            </View>
        );
    },
    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
            if (result.isCancelled) {
                console.log('Login cancelled');
            } else {
                console.log('Login success:' + result.grantedPermissions);
            }
        },
            function (error) {
                console.log('An error occured:' + error);
            });
    },
    //Goto Register
    _ToRegister() {
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
    },LoginBox:{
      paddingTop:70,
    },
    textInputViewStyle: {
        width: width - 90,
        height: 45,
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 2,
        marginTop:10,
        alignSelf: 'flex-start',
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
        marginTop: 20,
        marginRight:60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //"Login" style
    textLoginStyle: {
        fontSize: 18,
        color: 'white',
    },itemStyle:{
      position:'absolute',
      left:10,
      height:350,
      margin:10,
      marginRight:20,
      width:width-30,
      resizeMode: 'stretch'
    }
});
module.exports = Login;
