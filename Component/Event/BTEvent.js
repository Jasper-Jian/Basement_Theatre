/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
import Mainstyles from '../StylesSheet';
var {width}=Dimensions.get('window').width;

var Event = React.createClass( {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.EventImageBox}>
        <View>
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b4cd72e3df28ac9a90cee6/1488246289326/A_Figure_Exhales_400x400.jpg'}} style={styles.EventImageItem}></Image>
        </View>
          <View>
            <Text style={Mainstyles.TitleText}>A FIGURE EXHALES
            </Text>
            <View style={styles.Divider}></View>
            <Text style={Mainstyles.TitleText}>
            21 - 25 MAR 2017, 8:00PM
            </Text>
            <View style={styles.Divider}></View>
          </View>
        </View>
      </View>
    );
  }
});
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    backgroundColor:'blue',
    flex:1
  },
  EventImageItem:{
    height:150,
    resizeMode:'stretch',
    width:width,
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:1,
    borderBottomColor : 'white',
  },
  EventImageBox:{
    flexDirection:'row',
  },
});
module.exports = Event;
