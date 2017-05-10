import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Navigator,
  TextInput,
} from 'react-native';

export default class Bar extends Component {
  clickJump(){
    const{navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.headerBarContainer}>
      <TouchableOpacity onPress = {this.clickJump.bind(this)}>
        <Image source={require('../images/icon_camera_back_normal.png')}
              style={styles.backButton}
        />
      </TouchableOpacity>
      </View>
      <ScrollView>
        <Image source={require('../images/Bar_Head_Image.png')}
              style={styles.headImage}
        />
        <View style={styles.textBox}>
          <Text style={styles.textStyle}>
          Ah, Basement Bar. Where the staff know your name, your entire showreel, and what you want to drink before you know it yourself.{'\n'}{'\n'}
          Come drink with us this summer with warm weather picks from our favourite brew buddies including Garage Project, Funk Estate, and Panhead. We’ll be stocking crisp ambers, extra pales and some fruitier, more tropical flavours, plus the return of the big ol’ selection of pils to pair perfectly with sitting on a beanbag in a carpark.{'\n'}{'\n'}
          If wine’s what you’re after try one of our new cheap(ish) rosé pours or a smooth house Sav. And as always, we have a full range of spirits, bubbles, and many more craft brews for you to choose from as well–Behemoth, Galbraiths, our trusty Brothers on tap... and yeah, okay, you can still get your Tiger too.{'\n'}{'\n'}
          We like to change it up, so we can’t give you the full list of goodness, but usual stock includes delights such as:{'\n'}{'\n'}
          <Text style={{fontWeight:'bold'}}>
          • Brothers Beer • Galbraiths • Panhead • Liberty • Garage Project • Zeffer • Hallertau • Funk Estate • Spy Valley Sav • Crossroads Pinot Gris • Babich Chardonnay • Mahi Rose • Phat Jam Pinot Noir on tap • Deliverance Pinot Noir • Yealands Syrah • Karma{'\n'}{'\n'}
          </Text>
          There’s lots of yummy snacks at the bar, including Proper Crisps. We also bring Tanukis to you, cos we know one set of stairs is just too much.{'\n'}{'\n'}
          So chill in the sun, order up big on the cabbage and get in early on the most sort after beanbags and beers in town.{'\n'}{'\n'}
          <Text style={{fontWeight:'bold'}}>
          Basement’s bar is open 5pm - late; Tuesday through Saturday.{'\n'}{'\n'}
          </Text>
          Functions and hostings welcome.{'\n'}{'\n'}
          </Text>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        //set to full screen
        flex: 1,
        backgroundColor: 'white',
    },
    headImage: {
      width:Dimensions.get('window').width,
      height:200,
      resizeMode: 'stretch'
    },
    headerBarContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        height: 48,
        backgroundColor: '#C0CCD9',
        alignItems: 'center',
    },
    backButton: {
        height: 35,
        width: 35,
        resizeMode: 'stretch',
    },
    textBox:{
      flexDirection: 'column',
      paddingTop: 40,
      paddingLeft: 50,
      paddingRight: 50,
      backgroundColor: 'white',
    },
    textStyle:{
      fontSize: 16,
      color: 'black',
      lineHeight: 30,
    }
  })
