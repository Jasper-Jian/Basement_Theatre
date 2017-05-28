import React, {Component} from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableOpacity,
    Navigator,
    Image
} from 'react-native';
import Mine from './BTMine';
import Admin from './Admin';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Register extends Component{
  constructor(props) {
      super(props);
  }
    render(){
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://basement-theatre.squarespace.com/assets/images/logo-expanded.png'}} style={styles.itemStyle}>
                <View style={styles.LoginBox}>
            {/*use View to make username txt box*/}
            <View style={styles.textInputViewStyle}>
                <TextInput ref="inputLoginName"
                    style={styles.textInputStyle}
                    //placeholder
                    placeholder='Please Enter Your Email'
                    textAlign='center'
                    onChangeText={(input) => this.setState({username: input})}
                    underlineColorAndroid={'transparent'} />
            </View>
            {/*password input box*/}
            <View style={styles.textInputViewStyle}>
                <TextInput
                    ref="inputLoginPwd"
                    style={styles.textInputStyle}
                    placeholder='Please Enter Your Password'
                    textAlign='center'
                    //invisibility of password
                  onChangeText={(input) => this.setState({userpwd: input})}
                    secureTextEntry={true}/>
            </View>
            <View style={styles.textInputViewStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Please Confrim Your Password'
                    textAlign='center'

                    //invisibility of password
                    secureTextEntry={true}/>
            </View>
            <TouchableOpacity onPress={()=>this.loginInMainpage()}>
                {/*register button*/}
                <View style={styles.textLoginViewStyle}>
                    <Text style={styles.textLoginStyle}>Register</Text>
                </View>
            </TouchableOpacity>
         <TouchableOpacity onPress={() => {this._pushBack(); }}>
          <View>
              <Text>Already have a Account? Go back to login Page</Text>
          </View>

        </TouchableOpacity>
      </View>
        </Image>
        </View>
        );
    }
    _pushBack() {
        this.props.navigator.pop(Mine);
    }
    loginInMainpage() {
    this.refs.inputLoginName.blur();
    this.refs.inputLoginPwd.blur();
    this.props.navigator.resetTo({
        component: Admin,
        params: {
            logNmae: this.state.username,
            logPwd: this.state.userpwd,
            parentComponent: this,
            ...this.props
        },
    });
    }

    setLoginName(input) {
        this.setState = {inputName: input}
    }

    setLoginPwd(input) {
        this.setState = {inputPwd: input}
    }
}
const styles = StyleSheet.create({
  container: {
      //set to full screen
      flex: 1,
      backgroundColor:'rgba(174,221,129,1)',
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
  },
  itemStyle:{
    position:'absolute',
    left:10,
    height:350,
    margin:10,
    marginRight:20,
    width:width-30,
    resizeMode: 'stretch'
  }
});
