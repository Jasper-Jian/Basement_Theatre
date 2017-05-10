import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  BackAndroid
} from 'react-native';

import Mainstyles from '../StylesSheet';
import Event from '../Event/BTEventDetail';
var {width}=Dimensions.get('window').width;

export default class EventDetails extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={() => {this._Back()}}>
        <Image key={1} source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b52eade4fcb5991e72c16e/1488268974401/TASSEL1200.JPG'}} style={Mainstyles.itemStyle}/>
        </TouchableOpacity>
        <View>
          <View style={styles.DetailBox}>
            <Text style={Mainstyles.TitleText}>
              Tassel Me This
            </Text>
            <Text style={Mainstyles.MoreInfoText}>Shani Dickins & Jessie McCall hunt amongst glittering personal baggage for a Spectassular to call their own.
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            A dance theatre romp for anyone who has clung (for dear life) to a certain special moment.Winner of Best of Fringe 2015 at the Dunedin Fringe.
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            A brilliant visual masterpiece - Theatreview.
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            DATE: 11 APR - 15 APR
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            TIME: 8:00 PM
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            RUNTIME: 50 MINUTES
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            VENUE: THEATRE
            </Text>
            <Text style={Mainstyles.MoreInfoText}>
            PRICE: $16 - $20
            </Text>
          </View>
            <TouchableOpacity onPress={() => {this._Back()}}>
              <View style={styles.textLoginViewStyle}>
                  <Text>Book Now</Text>
              </View>
            </TouchableOpacity>
            <Text style={Mainstyles.MoreInfoText}>
            * Concession prices available to: Seniors 65+, Students with ID, Equity Members with ID.
            </Text>
        </View>
      </ScrollView>
      </View>
    );
  }
  _Back(){
      this.props.navigator.pop(Event); // 返回上一页
  }
};
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    backgroundColor:'blue',
    flex:1,
  },
  EventTimeText:{
    color:'white',
    fontSize:18,
    fontWeight:'400',
  },
  EventImageBox:{
      flexDirection:'row',
  },
  DetailBox:{
    margin: 15,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start'
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:3,
    borderBottomColor : 'white',
  },
  textLoginViewStyle: {
          width: 300,
          height: 35,
          backgroundColor: '#00fa00',
          borderRadius: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
      },
});
