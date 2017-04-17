/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchBar from '../Home/SearchBar';

var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
      <SearchBar />
        <Text style={styles.welcome}>
          Home Page
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
module.exports = Home;
