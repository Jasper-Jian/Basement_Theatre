'use restict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import SearchBar from '../Home/SearchBar';
var ImageData = require('../ImageData.json');
var TimerMixin = require('react-timer-mixin');//import timer

var {width}=Dimensions.get('window').width;
var Home = React.createClass({
  minxin: [TimerMixin],
  getInitialState(){
     return{
         currentPage:0,
     }
  },
  render() {
    return (
      <View style={styles.container}>
      <SearchBar />
         <ScrollView
        horizontal={true}   // horizontal allignment
        showsHorizontalScrollIndicator={false}  // Hide horizontal indicator
        showsVerticalScrollIndicator={false}    // Hide Vertical indicator
        pagingEnabled={true}
        onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
        >
          {/* {this.renderItem() } */}
          <Image key={1} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b52eade4fcb5991e72c16e/1488268974401/TASSEL1200.JPG'}} style={styles.itemStyle}/>
          <Image key={2} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49d1d17bffc07f1c3cf0e/1488231710603/1200x560+Shoot+the+freak+3.jpg'}}style={styles.itemStyle}/>
          <Image key={3} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49976e3df283cef4fd3ec/1488230779982/Castles+Basement+1200x560.png'}}style={styles.itemStyle}/>
          <Image key={4} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b4afc9e6f2e15812074d78/1488236490221/Performance+Salon+Week+2_1200.jpg'}}style={styles.itemStyle} />
          <Image key={5}source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b497e4a5790a11a8d14526/1488230372981/1200-560+size+new.jpg'}}style={styles.itemStyle}/>
       </ScrollView>
       <View style={styles.indicatorStyle}>
          {this.renderPageCircle()}
       </View>
      </View>
    );
  },
 renderItem(){
    var itemAry = [];
    // Get Js Data
    var imgAry = ImageData.data;
    for (var i = 0; i<imgAry.length; i++) {
        // Get individual File
        var item = imgAry[i];
        // push it to array
        itemAry.push(
            <Image key={i} style={styles.itemStyle} source={{uri:item.images}} />
        )
    }
    // Return array
    return itemAry;
  },
  renderPageCircle(){
      var indicatorArr=[];
      var style;
        for(var i = 0; i<5;i++){
        style = (i==this.state.currentPage)?{color:'orange'} : {color:'#ffffff'};
          indicatorArr.push(
            <Text key={i} style={[{fontSize:35},style]}>&bull;</Text>
        );
      }
      return indicatorArr;
    },
    onAnimationEnd(e){
      var offsetX= e.nativeEvent.contentOffset.x+30;
      var currentPage = Math.floor(offsetX / Dimensions.get('window').width);
      console.log(currentPage);
      this.setState({currentPage:currentPage});
    },
});

const styles = StyleSheet.create({
  itemStyle: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
  },indicatorStyle:{
    width:Dimensions.get('window').width,
    height:25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position:'absolute',
    bottom:0,
    justifyContent:'flex-end',
    flexDirection:'row',
    alignItems:'center',

  }
});
module.exports = Home;
