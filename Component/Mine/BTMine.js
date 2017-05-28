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

//get screen info
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

/*import external component*/
import Register from './Register';
import Admin from './Admin';
export default class Mine extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this._setupGoogleSignin();
  }
  render() {
    if (!this.state.user) {
      return (
          <View style={styles.container}>
            <Image source={{uri: 'https://basement-theatre.squarespace.com/assets/images/logo-expanded.png'}} style={styles.itemStyle}>
              {/*use View to make username txt box*/}
              <View style={styles.LoginBox}>
              <View style={styles.textInputViewStyle}>
                  <TextInput
                    ref="inputLoginName"
                    autoFocus={true}
                      style={styles.textInputStyle}
                      //placeholder
                      placeholder='Please Enter Your Username or Email'
                      textAlign='center'
                      underlineColorAndroid={'transparent'}
                      onChangeText={(input) => this.setState({username: input})}/>
              </View>

              {/*password input box*/}
              <View style={styles.textInputViewStyle}>
                  <TextInput
                    ref="inputLoginPwd"
                    clearTextOnFocus={true}
                    clearButtonMode="while-editing"
                      style={styles.textInputStyle}
                      placeholder='Please Enter Your Password'
                      textAlign='center'
                      //invisibility of password
                      secureTextEntry={true}
                    onChangeText={(input) => this.setState({userpwd: input})}/>
              </View>

              {/*clickable button*/}
              <TouchableOpacity onPress={()=>{this.loginInMainpage()}}>
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
               <GoogleSigninButton style={styles.textLoginViewStyle} color={GoogleSigninButton.Color.Light} size= {GoogleSigninButton.Size.Icon} onPress={() => { this._signIn(); }}/>
               </View>

               </Image>

          </View>

      );
  }
  if (this.state.user) {
     return (
       <View style={styles.container}>
         <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
         <Text>Your email is: {this.state.user.email}</Text>

         <TouchableOpacity onPress={() => {this._signOut(); }}>
           <View style={{marginTop: 50}}>
             <Text>Log out</Text>
           </View>
         </TouchableOpacity>
       </View>
     );
   }
}
    loginInMainpage() {
    this.refs.inputLoginName.blur();
    this.refs.inputLoginPwd.blur();
    this.props.navigator.push({
        component: Admin,
        params: {
            logName: this.state.username,
            logPwd: this.state.userpwd,
            parentComponent: this,...this.props
        },
    });
    }
    setLoginName(input) {
        this.setState = {inputName: input}
    }

    setLoginPwd(input) {
        this.setState = {inputPwd: input}
    }
  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '624986151461-ghge0s70j54dism65b9v7k2gfpjq411i.apps.googleusercontent.com',
        offlineAccess: false
      });

    const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }

  _signIn() {
    GoogleSignin.signIn().then((user) => {
      this.setState({user: user});
    })
    .catch((err) => {
      alert('WRONG SIGNIN', err);
    })
    .done();
  }


  _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
          if (result.isCancelled) {
              alert('Login cancelled');
          } else {
              alert('Login success:' + result.grantedPermissions);
          }
      },
          function (error) {
              console.log('An error occured:' + error);
          });
  }
  //Goto Register
  _ToRegister() {
      this.props.navigator.push(
          {
              component: Register,//Navigate page
              title: 'Register with email'
          }
      );
  }
}


const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor:'rgba(250,227,98,1)',
    },LoginBox:{
      paddingTop:70,
    },
    textInputViewStyle: {
        width: width - 90,
        height: 45,
        borderRadius: 10,
        borderColor: 'rgba(114,83,52,1)',
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
        backgroundColor: 'rgba(69,137,148,.9)',
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
