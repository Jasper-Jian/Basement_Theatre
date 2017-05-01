'use restict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
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
        <ScrollView>
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

      <View style={styles.TitleStyle}>
          <Text style={styles.TitleText}>WHAT'S ON</Text>
          <View style={styles.ImageBox}>
              <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49d6a17bffc07f1c3d46d/1488243609528/Pedal+Basement+400x400.png'}}style={styles.TitleitemStyle}/>
              <Text style={styles.DetailText}>PEDAL</Text>
              <View style={styles.Divider}></View>
              <Text style={styles.TimeText}>4 MAR, 5:00 PM</Text>
              <View style={styles.Divider}></View>
              <View style={styles.InfoBTStyle}>
              <TouchableOpacity onPress={() => { alert('More Info') }}>
                  {/*Info button*/}
                  <View style={styles.InfoViewStyle}>
                      <Text style={styles.MoreInfoText}>More Info</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { alert('Book Now') }}>
                  {/*Info button*/}
                  <View style={styles.BookNowViewStyle}>
                      <Text style={styles.BookNowText}>Book Now</Text>
                  </View>
              </TouchableOpacity>
              </View>
          </View>
          <View style={styles.ImageBox}>
              <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b49d6a17bffc07f1c3d46d/1488243609528/Pedal+Basement+400x400.png'}}style={styles.TitleitemStyle}/>
              <Text style={styles.DetailText}>PEDAL</Text>
              <View style={styles.Divider}></View>
              <Text style={styles.TimeText}>4 MAR, 5:00 PM</Text>
              <View style={styles.Divider}></View>
              <View style={styles.InfoBTStyle}>
              <TouchableOpacity onPress={() => { alert('More Info') }}>
                  {/*Info button*/}
                  <View style={styles.InfoViewStyle}>
                      <Text style={styles.MoreInfoText}>More Info</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { alert('Book Now') }}>
                  {/*Info button*/}
                  <View style={styles.BookNowViewStyle}>
                      <Text style={styles.BookNowText}>Book Now</Text>
                  </View>
              </TouchableOpacity>
              </View>
          </View>
     </View>
     </ScrollView>
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
  container:{
    flexDirection:'column',

  },
  itemStyle: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
  },indicatorStyle:{
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
  },Divider:{
    marginLeft:25,
    marginRight:25,
    borderStyle:'solid',
    borderBottomWidth:1,
    borderBottomColor : 'blue',
  },TimeText:{
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
  }



});
module.exports = Home;
