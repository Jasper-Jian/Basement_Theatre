import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Navigator
} from 'react-native';
import Mainstyles from '../StylesSheet';
import EventDetails from '../Event/BTEventDetail';
var {width}=Dimensions.get('window').width;

export default class Event extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
           <TouchableOpacity onPress={()=> {this._Back()} }>
           <Text style={Mainstyles.TitleText}>
           Coming Soon Event
         </Text>
       </TouchableOpacity>
         <TouchableOpacity onPress={()=> {this.pushToDetail()} }>
        <View style={styles.EventImageBox}>
        <View>
          <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/590be5d5e58c62a557ce62b9/1493952035395/image.png'}} style={styles.EventImageItem}></Image>
        </View>
          <View>
            <Text style={Mainstyles.TitleText}>
            LIVE REEL
            </Text>
            <View style={styles.Divider}></View>
            <Text style={styles.EventTimeText}>
             24 MAY, VARIOUS TIMES
             </Text>
             <View style={styles.Divider}></View>
           </View>
         </View>
         </TouchableOpacity>

         {/*Second Image*/}
         <TouchableOpacity underlayColor = '#ddd'>

         <View style={styles.EventImageBox}>
         <View>
           <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/590be634ebbd1afaa384ebfb/1493952175187/image-1.jpg'}} style={styles.EventImageItem}></Image>
         </View>
           <View>
            <Text style={Mainstyles.TitleText}>
            THE WATERCOOLER: ISSUE #38: JUNE EDITION
             </Text>
             <View style={styles.Divider}></View>
             <Text style={styles.EventTimeText}>
             1 JUN, VARIOUS TIMES
             </Text>
             <View style={styles.Divider}></View>
           </View>
         </View>
        </TouchableOpacity>
         {/*Third Image*/}
         <TouchableOpacity>
         <View style={styles.EventImageBox}>
         <View>
           <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/590be43acd0f68476769d48d/1493951916725/image.jpg;'}} style={styles.EventImageItem}></Image>
         </View>
           <View>
             <Text style={Mainstyles.TitleText}>
             DOWN TO CLOWN
             </Text>
             <View style={styles.Divider}></View>
             <Text style={styles.EventTimeText}>
             2 JUN - 8 DEC 2017, VARIOUS TIMES
             </Text>
             <View style={styles.Divider}></View>
           </View>
         </View>
         </TouchableOpacity>
         {/*Fourth Image*/}
         <TouchableOpacity>
         <View style={styles.EventImageBox}>
         <View>
           <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/590be836d1758ebf2c3fce8c/1493952648413/image-1.png;'}} style={styles.EventImageItem}></Image>
         </View>
           <View>
             <Text style={Mainstyles.TitleText}>
             FAKE AMERICAN ACCENT – A MONTHLY POETRY READING
             </Text>
             <View style={styles.Divider}></View>
             <Text style={styles.EventTimeText}>
             22 JUN, VARIOUS TIMES
             </Text>
             <View style={styles.Divider}></View>
           </View>
         </View>
         </TouchableOpacity>
         {/*Fifth Image*/}
         <TouchableOpacity>
         <View style={styles.EventImageBox}>
         <View>
           <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/590be6bcebbd1afaa384f354/1493952278658/image-2.jpg'}} style={styles.EventImageItem}></Image>
         </View>
           <View>
             <Text style={Mainstyles.TitleText}>
             FRESH OFF THE PAGE
             </Text>
             <View style={styles.Divider}></View>
             <Text style={styles.EventTimeText}>
             7 JUN, VARIOUS TIMES
             </Text>
             <View style={styles.Divider}></View>
           </View>
         </View>
         </TouchableOpacity>
         {/*Sixth Image*/}
         <TouchableOpacity>
         <View style={styles.EventImageBox}>
         <View>
           <Image source={{uri: 'https://static1.squarespace.com/static/5535bce1e4b071a2f7e12732/55a85f73e4b0a37bc13840e6/58b4cd72e3df28ac9a90cee6/1488246289326/A_Figure_Exhales_400x400.jpg'}} style={styles.EventImageItem}></Image>
         </View>
           <View>
             <Text style={Mainstyles.TitleText}>
             A FIGURE EXHALES
             </Text>
             <View style={styles.Divider}></View>
             <Text style={styles.EventTimeText}>
            21 - 25 MAR 2017, 8:00PM
            </Text>
            <View style={styles.Divider}></View>
          </View>
        </View>
        </TouchableOpacity>
       </ScrollView>
      </View>
    );
  }
  pushToDetail() {
      this.props.navigator.push(
          {
            component: EventDetails,//Navigate page
            title: 'Event Details'
          }
      );
  }
  _Back(){
      this.props.navigator.pop(); // 返回上一页
  }
};
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    backgroundColor:'blue',
  },
  EventTimeText:{
    color:'white',
    fontSize:18,
    fontWeight:'400',
  },
  EventImageBox:{
    flexDirection:'row',
  },
  EventImageItem:{
   margin: 5,
   height:100,
   resizeMode:'cover',
   width:Dimensions.get('window').width/4,
  },
  Divider:{
    borderStyle:'solid',
    borderBottomWidth:1,
    borderBottomColor : 'white',
  },

});
