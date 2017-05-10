'use restict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
const StylesSheet = StyleSheet.create({
  container:{
    flexDirection:'column',
  },
  itemStyle: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
  },
  indicatorStyle:{
    width:Dimensions.get('window').width,
    height:25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom:25,
    justifyContent:'flex-end',
    flexDirection:'row',
    alignItems:'center',
    margin:0,
    padding:0,
  },
  TitleStyle:{
    bottom:25,
    height: 1200,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,255,1)',
    alignItems:'center',
  },
  TitleText:{
    fontSize:23,
    color:'white',
    fontWeight:'800',
  },
  TitleitemStyle:{
    margin:25,
    marginBottom:0,
    marginTop:10,
    height: 180,
    resizeMode: 'cover'
  },
  ImageBox:{
    margin:10,
    height:300,
    backgroundColor:'rgba(255,255,255,1)',
    width: Dimensions.get('window').width-50,
  },
  DetailText:{
    color:'blue',
    fontSize:20,
    justifyContent:'flex-start',
    marginLeft:25,
    fontWeight:'800',
  },
  Divider:{
    marginLeft:25,
    marginRight:25,
    borderStyle:'solid',
    borderBottomWidth:1,
    borderBottomColor : 'blue',
  },
  TimeText:{
    marginLeft:25,
    color:'blue',
    fontWeight:'400',
  },
  InfoBTStyle:{
    flexDirection:'row',
  },
  InfoViewStyle:{
    marginLeft:25,
    width: 160,
    height: 35,
    backgroundColor: 'blue',
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  MoreInfoText:{
    marginTop:8,
    color:'white',
    fontWeight:'400',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BookNowViewStyle:{
    width: 160,
    marginLeft:-1,
    height: 35,
    backgroundColor: 'white',
    borderStyle:'solid',
    borderColor : 'blue',
    borderWidth:0.8,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BookNowText:{
    marginTop:7,
    color:'blue',
    fontWeight:'400',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchBarContainer: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      height: 48,
      backgroundColor: '#C0CCD9',
      alignItems: 'center',
  },
  sideMenu: {
      height: 35,
      width: 35,
      resizeMode: 'stretch'
  },
  searchBox: {
      height: 30,
      flexDirection: 'row',
      borderRadius: 5,
      backgroundColor: '#C0CCD9',
      borderColor: 'black',
      borderWidth: 2,
      flex: 1,
      alignItems: 'center',
      marginLeft: 8,
      marginRight: 12
  },
  searchIcon: {
      marginLeft: 6,
      marginRight: 6,
      width: 16.7,
      height: 16.7,
      resizeMode: 'stretch'
  },
  searchInputText: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 14,
      marginTop: -6.65,
      marginBottom: -6.65,

  },
  button:{
        position:'absolute',
        padding:20,
        top:20
    },
});
  module.exports = StylesSheet;
