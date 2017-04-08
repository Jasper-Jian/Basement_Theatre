/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Navigator,
} from 'react-native';
/*-------------------import component----------*/
var Main = require('./Component/Main/BTMain');
class Basement_Theatre extends Component {
    render() {
       return(
       <Main />
        );
    }
}
AppRegistry.registerComponent('Basement_Theatre', () => Basement_Theatre);
