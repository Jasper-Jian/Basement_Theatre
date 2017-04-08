import React, { Component } from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';

//get screen info
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
/*import external component*/
var Register = require('./Register');
var Mine = React.createClass ({
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
                        secureTextEntry={true}/>
                </View>
                {/*clickable button*/}
                <TouchableOpacity onPress={()=>{alert('Login')}}>
                    {/*login button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    {/*register button*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },

    //Goto Register
    pushToDetail(){
        this.props.navigator.push(
        {
            component:Register,//Navigate page
            title:'Register with email'
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
        width:  200,
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