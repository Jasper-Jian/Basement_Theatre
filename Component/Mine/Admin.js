import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';
import Register from './Register';
export default class Admin extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
            //这里获取从FirstPageComponent传递过来的参数: id
            this.setState({
                user:this.props.logName,
                pwd:this.props.logPwd
            });
    }

    render() {
        return (<View style={styles.container}>
            <Text style={styles.textStyle}>Welcome</Text>
            <Text style={styles.textStyle}>Your Current UserName is: {this.props.logName}</Text>
            <Text style={styles.textStyle}>Your Current Password is：{this.props.logPwd}</Text>
            <TouchableOpacity onPress={() => {alert(this.props.logName)}}>
             <View>
                 <Text>Already have a Account? Go back to login Page</Text>
             </View>

           </TouchableOpacity>
           <TouchableOpacity onPress={() => {this._pushBack()}}>
            <View>
                <Text>Already have a Account? Go back to login Page</Text>
            </View>

          </TouchableOpacity>
        </View>)
    }
    _pushBack() {
        this.props.navigator.pop(Register);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    },
})
